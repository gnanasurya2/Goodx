import { AddUser, FetchUser } from "../../database/database";
import { FETCH_USER } from "./index";

export const addUser = (username, email, phoneNumber) => {
  return async (dispatch) => {
    await AddUser(username, email, phoneNumber).then(dispatch(fetchUser()));
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    await FetchUser().then((data) => {
      dispatch({
        type: FETCH_USER,
        data: data.rows._array,
      });
    });
  };
};
