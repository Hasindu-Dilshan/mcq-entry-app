import {
    LOGIN,
} from '../constants/actionTypes';

const initialState = {
    email: null,
    _id: null,
    name: null,
    role: null,
    token: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, ...action.user};
        default:
            return state;
    }
}