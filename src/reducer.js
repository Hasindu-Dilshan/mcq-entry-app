import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import topic from './reducers/topic';
import question from './reducers/question';

export default combineReducers ({
    auth,
    common,
    topic,
    question
});