import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { createLogger } from 'redux-logger';

import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer'

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(promiseMiddleware, localStorageMiddleware);
    } else {
        // Enable additional logging in non-production environments.
        return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger())
    }
};

export const store = createStore(
    reducer, getMiddleware()
);