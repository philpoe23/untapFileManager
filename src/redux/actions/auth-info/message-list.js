import initialState from '../../../config/dataService/message-list.json';

const readMessageList = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'READ_MESSAGE_SUCCESS',
        message: initialState,
      });
    } catch (err) {
      dispatch({
        type: 'READ_MESSAGE_ERR',
        err,
      });
    }
  };
};

export { readMessageList };
