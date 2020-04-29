import actions from './actions';
import staticData from '../../config/dataService/chatData.json';

const chatReducer = (state = staticData, action) => {
  return state;
};

const initialState = {
  data: staticData,
  loading: false,
  error: null,
};

const { SINGLE_CHAT_BEGIN, SINGLE_CHAT_SUCCESS, SINGLE_CHAT_ERR } = actions;

const SingleChatReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_CHAT_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_CHAT_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_CHAT_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleChatReducer, chatReducer };
