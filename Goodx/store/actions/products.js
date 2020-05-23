import {
  AddProducts,
  FetchProducts,
  DeleteProducts,
} from "../../database/database";

import { FETCH_FAVOURITES, FETCH_MYPRODUCTS } from "./index";

export const addProducts = (
  category,
  title,
  description,
  price,
  phoneNumber,
  timeStamp,
  type
) => {
  return async (dispatch) => {
    await AddProducts(
      category,
      title,
      description,
      price,
      phoneNumber,
      timeStamp,
      type
    )
      .then((data) => {
        dispatch(fetchProducts(type));
      })
      .catch((err) => console.log(err.message));
  };
};

export const fetchProducts = (type) => {
  // console.log(type);
  return async (dispatch) => {
    await FetchProducts(type)
      .then((result) => {
        let t = FETCH_MYPRODUCTS;
        if (type === "Favourites") {
          t = FETCH_FAVOURITES;
        }
        dispatch({
          type: t,
          data: result.rows._array,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteProducts = (title, description, type) => {
  return async (dispatch) => {
    await DeleteProducts(title, description, type)
      .then((data) => dispatch(fetchProducts(type)))
      .catch((err) => console.log(err));
  };
};
