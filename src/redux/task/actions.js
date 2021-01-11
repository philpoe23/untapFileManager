const actions = {
  TASK_READ_BEGIN: 'TASK_READ_BEGIN',
  TASK_READ_SUCCESS: 'TASK_READ_SUCCESS',
  TASK_READ_ERR: 'TASK_READ_ERR',

  taskReadBegin: () => {
    return {
      type: actions.TASK_READ_BEGIN,
    };
  },

  taskReadSuccess: data => {
    return {
      type: actions.TASK_READ_SUCCESS,
      data,
    };
  },

  taskReadErr: err => {
    return {
      type: actions.TASK_READ_ERR,
      err,
    };
  },
};

export default actions;
