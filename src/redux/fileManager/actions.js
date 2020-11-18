const actions = {
  FM_DATA_BEGIN: 'FM_DATA_BEGIN',
  FM_DATA_SUCCESS: 'FM_DATA_SUCCESS',
  FM_DATA_ERR: 'FM_DATA_ERR',

  fmDataBegin: () => {
    return {
      type: actions.FM_DATA_BEGIN,
    };
  },

  fmDataSuccess: data => {
    return {
      type: actions.FM_DATA_SUCCESS,
      data,
    };
  },

  fmDataErr: err => {
    return {
      type: actions.FM_DATA_ERR,
      err,
    };
  },
};

export default actions;
