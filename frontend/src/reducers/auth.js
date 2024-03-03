import { LOGIN } from "../constants/actionTypes";

const initialState = {
  email: undefined,
  _id: undefined,
  name: undefined,
  role: undefined,
  token: undefined,
  avatar: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.user };
    default:
      return state;
  }
};
