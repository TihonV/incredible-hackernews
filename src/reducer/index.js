import { Map } from 'immutable';

const initialState = new Map();

/**
 * @func
 * @desc Reducer for loading items
 * @param {Map|OrderedMap} state
 * @param {string} type
 * @param {Map} payload
 */
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'LOAD_LIST':
    return state.mergeIn(
      ['list', payload.keySeq().first()],
      payload.get(payload.keySeq().first()),
    );
  case 'LOAD_POST':
    return state.setIn(['list', payload.get('path'), payload.get('id')], payload.remove('path'));
  default:
    return state;
  }
};

export default rootReducer;
