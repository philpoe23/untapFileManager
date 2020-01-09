//import initialState from '../../../config/dataService/message-list.json';
const initialState = [];
const readNotificationReducer = (state = initialState, action) => {
  const { type, notification, err } = action;
  switch (type) {
    case 'READ_NOTIFICATION_SUCCESS':
      return notification;
    case 'READ_NOTIFICATION_ERR':
      return err;
    default:
      return state;
  }
};
export default readNotificationReducer;
