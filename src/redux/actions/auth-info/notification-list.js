import initialState from '../../../config/dataService/message-list.json';

const readNotificationList = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'READ_NOTIFICATION_SUCCESS',
        notification: initialState,
      });
    } catch (err) {
      dispatch({
        type: 'READ_NOTIFICATION_ERR',
        err,
      });
    }
  };
};

export { readNotificationList };
