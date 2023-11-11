import {
    LOGIN,
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, email: action.payload.user.email};
        default:
            return state;
    }
}