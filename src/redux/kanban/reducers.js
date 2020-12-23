import actions from './actions';
import kanbanBoardData from '../../demoData/kanbanBoard.json';
import kanbanTaskData from '../../demoData/kanbanTasks.json';

const initialState = {
  boardData: kanbanBoardData,
  taskData: kanbanTaskData,
  loading: false,
  error: null,
};

const { NOTE_STAR_UPDATE_BEGIN } = actions;

const kanbanBoardReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case NOTE_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    default:
      return state;
  }
};

const kanbanTaskReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case NOTE_STAR_UPDATE_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    default:
      return state;
  }
};

export { kanbanBoardReducer, kanbanTaskReducer };
