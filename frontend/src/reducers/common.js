import {
  APP_LOAD,
  SYLLABI_SAVE_NEW,
  TOPICS_SAVE_NEW,
} from "../constants/actionTypes";

const defaultState = {
  appName: "ZeroCode",
  currentSyllabi_b64: undefined,
  currentTopics_b64: undefined,
  appLoaded: false,
};

const common = (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
      };

    case SYLLABI_SAVE_NEW:
      return {
        ...state,
        currentSyllabi_b64: action.payload,
      };
    case TOPICS_SAVE_NEW:
      return {
        ...state,
        currentTopics_b64: action.payload,
      };
    default:
      return state;
  }
};

export default common;
