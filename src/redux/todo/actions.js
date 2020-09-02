const actions = {
  TODO_READ_BEGIN: 'TODO_READ_BEGIN',
  TODO_READ_SUCCESS: 'TODO_READ_SUCCESS',
  TODO_READ_ERR: 'TODO_READ_ERR',

  todoReadBegin: () => {
    return {
      type: actions.TODO_READ_BEGIN,
    };
  },

  todoReadSuccess: data => {
    return {
      type: actions.TODO_READ_SUCCESS,
      data,
    };
  },

  todoReadErr: err => {
    return {
      type: actions.TODO_READ_ERR,
      err,
    };
  },
};

export default actions;
