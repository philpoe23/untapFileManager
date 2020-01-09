import initialState from '../../../config/dataService/message-list.json';

const readMessageReducer = (state = initialState, action) => {
  const { type, message, err } = action;
  switch (type) {
    case 'READ_MESSAGE_SUCCESS':
      return message;
    case 'READ_MESSAGE_ERR':
      return err;
    default:
      return state;
  }
};
export default readMessageReducer;
