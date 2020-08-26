const actions = {
  CHANGE_LAYOUT_MODE_BEGIN: 'CHANGE_LAYOUT_MODE_BEGIN',
  CHANGE_LAYOUT_MODE_SUCCESS: 'CHANGE_LAYOUT_MODE_SUCCESS',
  CHANGE_LAYOUT_MODE_ERR: 'CHANGE_LAYOUT_MODE_ERR',

  changeLayoutBegin: () => {
    return {
      type: actions.CHANGE_LAYOUT_MODE_BEGIN,
    };
  },

  changeLayoutSuccess: data => {
    return {
      type: actions.CHANGE_LAYOUT_MODE_SUCCESS,
      data,
    };
  },

  changeLayoutErr: err => {
    return {
      type: actions.CHANGE_LAYOUT_MODE_ERR,
      err,
    };
  },
};

export default actions;
