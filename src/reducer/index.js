import { Map } from 'immutable';

const initialState = new Map();

/**
 * @func
 * @desc Reducer for loading items
 * @param {Map} state
 * @param {string} type
 * @param {Map} payload
 */
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'LOAD_LIST':
    return state.set('list', payload);
  case 'LOAD_POST':
    return state.setIn(['list', payload.get('id')], payload);
  default:
    return state;
  }
};

export default rootReducer;
