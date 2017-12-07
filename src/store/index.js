import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';


const middleware = applyMiddleware(thunk);

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({
  ...reducers,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
  serialize: {
    options: {
      undefined: true,
      function(fn) { return fn.toString(); },
    },
  },
}), middleware);
/* eslint-enable no-underscore-dangle */

export default store;
