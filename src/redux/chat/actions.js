const actions = {
  SINGLE_CHAT_BEGIN: 'SINGLE_CHAT_BEGIN',
  SINGLE_CHAT_SUCCESS: 'SINGLE_CHAT_SUCCESS',
  SINGLE_CHAT_ERR: 'SINGLE_CHAT_ERR',

  singleChatBegin: () => {
    return {
      type: actions.SINGLE_CHAT_BEGIN,
    };
  },

  singleChatSuccess: data => {
    return {
      type: actions.SINGLE_CHAT_SUCCESS,
      data,
    };
  },

  singleChatErr: err => {
    return {
      type: actions.SINGLE_CHAT_ERR,
      err,
    };
  },
};

export default actions;
