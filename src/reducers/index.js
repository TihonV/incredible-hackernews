import C from '../consts';

const { actionNames } = C;


/**
 * @name AskReducer
 * @type {Object}
 */
const ask = {
  initialState: {
    posts: {},
    errors: {
      status: false,
      msg: '',
    },
    isLoading: false,
  },
};

/**
 * @desc Reducer for working with asks
 * @func
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @param {Object} action.payload
 * @returns {Object}
 */
ask.reducer = (state = ask.initialState, action) => {
  switch (action.type) {
  case actionNames.LOAD_START:
    return {
      ...state,
      ...action.payload,
    };
  case actionNames.LOAD_ERROR:
    return {
      ...state,
      errors: { ...action.payload.errors },
    };
  case actionNames.LOAD_DONE:
    return state;
  default:
    return state;
  }
};


const comments = {
  initialState: {},
};

/**
 * @desc Reducer for working with comments
 * @func
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @param {Object} action.payload
 * @returns {Object}
 */
comments.reducer = (state = comments.initialState, action) => {
  switch (action.type) {
  case actionNames.LOAD_START:
    return state;
  default:
    return state;
  }
};

const jobs = {
  initialState: {
    posts: {},
    errors: {
      status: false,
      msg: '',
    },
    isLoading: false,
  },
};

/**
 * @desc Reducer for working with jobs
 * @func
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @param {Object} action.payload
 * @returns {Object}
 */
jobs.reducer = (state = {}, action) => {
  switch (action.type) {
  case actionNames.LOAD_START:
    return state;
  default:
    return state;
  }
};

const news = {
  initialState: {
    posts: {},
    errors: {
      status: false,
      msg: '',
    },
    isLoading: false,
  },
};

/**
 * @desc Reducer for working with news
 * @func
 * @param {Object} state
 * @param {Object} action
 * @param {string} action.type
 * @param {Object} action.payload
 * @returns {Object}
 */
news.reducer = (state = news.initialState, action) => {
  switch (action.type) {
  case actionNames.news.LOAD_START:
    return {
      ...state,
      isLoading: true,
      errors: {
        status: false,
        msg: '',
      },
    };
  case actionNames.news.LOAD_DONE:
    return {
      ...state,
      posts: { ...action.payload.posts },
      isLoading: true,
      errors: {
        status: false,
        msg: '',
      },
    };
  case actionNames.news.LOAD_ERROR:
    return {
      ...state,
      errors: {
        status: true,
        msg: action.payload.errors.msg,
      },
    };
  default:
    return state;
  }
};

export default {
  ask: ask.reducer,
  comments: comments.reducer,
  jobs: jobs.reducer,
  news: news.reducer,
};
