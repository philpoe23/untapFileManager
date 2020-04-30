import initialState from '../../config/dataService/message-list.json';
import actions from './actions';

const { readNotificationBegin, readNotificationSuccess, readNotificationErr } = actions;

const readNotificationList = () => {
  return async dispatch => {
    try {
      dispatch(readNotificationBegin());
      dispatch(readNotificationSuccess(initialState));
    } catch (err) {
      dispatch(readNotificationErr(err));
    }
  };
};

export { readNotificationList };
