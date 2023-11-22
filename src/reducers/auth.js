import {
    LOGIN, LOGOUT,
} from '../constants/actionTypes';

const initialState = {
    email: null,
    _id: null,
    name: null,
    role: null,
    token: null,
    avatar: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, ...action.user};
        case LOGOUT:
            return {...state, ...initialState };
        default:
            return state;
    }
}