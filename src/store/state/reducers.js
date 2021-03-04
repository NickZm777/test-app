import { GET_NEWS_DATA } from './actions';

const ACTION_HANDLERS = {
  [GET_NEWS_DATA]: (state, action) => {
    return {
      ...state,
      newsData: action.candleData,
    };
  },
};

const initialState = {
  newsData: [],
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
