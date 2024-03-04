import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import { createLogger } from "redux-logger";

import { promiseMiddleware, localStorageMiddleware } from "./middleware/middleware";
import rootReducer from "./reducers/reducer";

import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return [promiseMiddleware, localStorageMiddleware];
  } else {
    // Enable additional logging in non-production environments.
    return [promiseMiddleware, localStorageMiddleware, createLogger()];
  }
};

const getOtherEnhancers = () => {
  let enhancers = [];

  if (window.__REDUX_DEVTOOLS_EXTENSION__)
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

  return enhancers;
};

const composedEnhancers = compose(
  applyMiddleware(...getMiddleware()),
  ...getOtherEnhancers()
);

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store);
