import actions from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const { TODO_READ_BEGIN, TODO_READ_SUCCESS, TODO_READ_ERR } = actions;

const TodoReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TODO_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TODO_READ_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case TODO_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default TodoReducer;
