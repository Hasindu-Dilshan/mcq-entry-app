import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer'

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return [promiseMiddleware, localStorageMiddleware];
    } else {
        // Enable additional logging in non-production environments.
        return [promiseMiddleware, localStorageMiddleware, createLogger()]
    }
};

const getOtherEnhancers = () => {
    let enhancers = [];

    if(window.__REDUX_DEVTOOLS_EXTENSION__)
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())

    return enhancers;
}

const composedEnhancers = compose(applyMiddleware(...getMiddleware()), ...getOtherEnhancers());

export const store = createStore(
  reducer,
  composedEnhancers
)





// export const store = createStore(
//     reducer, compose(applyMiddleware(getMiddleware()), ...getEnhancers())
// );