import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import topic from './reducers/topic';

export default combineReducers ({
    auth,
    common,
    topic
});