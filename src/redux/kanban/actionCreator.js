import actions from './actions';
import kanbanBoardData from '../../demoData/kanbanBoard.json';
import kanbanTaskData from '../../demoData/kanbanTasks.json';

const { toAddBoardReadBegin, toAddBoardSuccess, toAddBoardReadErr } = actions;

const ToAddBoard = data => {
  return async dispatch => {
    try {
      dispatch(toAddBoardReadBegin());
      dispatch(toAddBoardSuccess(data));
    } catch (err) {
      dispatch(toAddBoardReadErr(err));
    }
  };
};

export { ToAddBoard };
