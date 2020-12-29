const actions = {
  BOARD_READ_BEGIN: 'BOARD_READ_BEGIN',
  BOARD_READ_SUCCESS: 'BOARD_READ_SUCCESS',
  BOARD_READ_ERR: 'BOARD_READ_ERR',

  toAddBoardReadBegin: () => {
    return {
      type: actions.BOARD_READ_BEGIN,
    };
  },

  toAddBoardSuccess: data => {
    return {
      type: actions.BOARD_READ_SUCCESS,
      data,
    };
  },

  toAddBoardReadErr: err => {
    return {
      type: actions.BOARD_READ_ERR,
      err,
    };
  },
};

export default actions;
