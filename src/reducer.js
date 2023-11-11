import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import syllabus from './reducers/syllabus';

export default combineReducers ({
    auth,
    common,
    syllabus
});