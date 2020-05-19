import * as ActionTypes from "../actions/index";

const initialState = {
  favourites: [],
  myProducts: [],
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FAVOURITES: {
      return {
        ...state,
        favourites: [...action.data],
      };
    }
    case ActionTypes.FETCH_MYPRODUCTS: {
      return {
        ...state,
        myProducts: [...action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export default productsReducers;
