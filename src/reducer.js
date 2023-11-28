import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import topic from './reducers/topic';
import question from './reducers/question';
import { LOGOUT } from './constants/actionTypes';

const appReducer = combineReducers ({
    auth,
    common,
    topic,
    question
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
      return appReducer(undefined, action);
    }
  
    return appReducer(state, action);
}

export default rootReducer;