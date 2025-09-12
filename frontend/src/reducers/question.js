import {
  QUESTION_SUBMIT_START,
  QUESTION_SUBMIT_END,
} from "../constants/actionTypes";

const defaultState = {
  isSubmitting: false,
};

const questionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case QUESTION_SUBMIT_START:
      return {
        ...state,
        isSubmitting: true,
      };
    case QUESTION_SUBMIT_END:
      return {
        ...state,
        isSubmitting: false,
      };

    default:
      return state;
  }
};

export default questionReducer;
