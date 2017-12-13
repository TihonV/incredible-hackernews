/* global process */

import { createStore } from 'redux';
import { Map } from 'immutable';

import { combineReducers } from 'redux-immutable';
import postsReducer from '../reducer';

const rootReducer = combineReducers({ items: postsReducer });

const store = process.env.NODE_ENV.toLowerCase() === 'development' ? createStore(
  rootReducer,
  new Map(),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable no-underscore-dangle */
) : createStore(rootReducer, new Map());

export default store;
