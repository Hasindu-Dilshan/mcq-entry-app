import { combineReducers } from "redux";
import auth from "./auth";
import common from "./common";
import topic from "./topic";
import question from "./question";
import { LOGOUT } from "../constants/actionTypes";

const appReducer = combineReducers({
  auth,
  common,
  topic,
  question,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
