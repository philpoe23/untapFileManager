import actions from './actions';
import taskData from '../../demoData/task.json';

const initialState = {
  data: taskData,
  loading: false,
  error: null,
};

const { NOTE_READ_BEGIN, NOTE_READ_SUCCESS, NOTE_READ_ERR } = actions;

const TaskReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case NOTE_READ_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    default:
      return state;
  }
};

export default TaskReducer;
