import initialState from '../../config/dataService/chatData.json';
import actions from './actions';

const { singleChatBegin, singleChatSuccess, singleChatErr } = actions;

const filterSinglepage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleChatBegin());
      const data = initialState.filter(user => {
        return user.email === paramsId;
      });
      dispatch(singleChatSuccess(data));
    } catch (err) {
      dispatch(singleChatErr(err));
    }
  };
};

export { filterSinglepage };
