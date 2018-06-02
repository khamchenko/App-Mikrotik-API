import { applyMiddleware, createStore, compose } from 'redux';
import { IS_DEV } from 'utils/env';

import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import redusers from '../reducers';

import middlewares from '../middlewares';

let composeEnhancers = compose;

if (IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

export default function (initialState = {}) {

  const store = createStore( redusers, initialState, enhancer);

  return store;
}
