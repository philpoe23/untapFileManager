const actions = {
  SINGLE_EMAIL_BEGIN: 'SINGLE_EMAIL_BEGIN',
  SINGLE_EMAIL_SUCCESS: 'SINGLE_EMAIL_SUCCESS',
  SINGLE_EMAIL_ERR: 'SINGLE_EMAIL_ERR',

  singleEmailBegin: () => {
    return {
      type: actions.SINGLE_EMAIL_BEGIN,
    };
  },

  singleEmailSuccess: data => {
    return {
      type: actions.SINGLE_EMAIL_SUCCESS,
      data,
    };
  },

  singleEmailErr: err => {
    return {
      type: actions.SINGLE_EMAIL_ERR,
      err,
    };
  },
};

export default actions;
