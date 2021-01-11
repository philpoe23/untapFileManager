import actions from './actions';
import taskData from '../../demoData/task.json';

const initialState = {
  data: taskData,
  loading: false,
  error: null,
};

const { TASK_READ_BEGIN, TASK_READ_SUCCESS, TASK_READ_ERR } = actions;

const TaskReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case TASK_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TASK_READ_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case TASK_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default TaskReducer;
