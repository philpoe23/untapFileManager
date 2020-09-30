import actions from './actions';
import initialState from '../../demoData/todo.json';

const { todoReadBegin, todoReadSuccess, todoReadErr } = actions;

const ToDoGetData = () => {
  return async dispatch => {
    try {
      dispatch(todoReadBegin());
      dispatch(todoReadSuccess(initialState));
    } catch (err) {
      dispatch(todoReadErr(err));
    }
  };
};

export { ToDoGetData };
