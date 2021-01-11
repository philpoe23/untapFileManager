import actions from './actions';
import initialState from '../../demoData/task.json';

const { taskReadBegin, taskReadSuccess, taskReadErr } = actions;

const taskAddData = data => {
  return async dispatch => {
    try {
      dispatch(taskReadBegin());
      dispatch(taskReadSuccess(data));
    } catch (err) {
      dispatch(taskReadErr(err));
    }
  };
};

export { taskAddData };
