const initialState = {
  users: [],
};
import * as actionTypes from "../actions/index";

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER: {
      return {
        ...state,
        users: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducers;
