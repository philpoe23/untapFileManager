import actions from './actions';
import initialState from '../../config/dataService/emailData.json';

const { singleEmailBegin, singleEmailSuccess, singleEmailErr } = actions;

const filterSinglepage = paramsId => {
  return async dispatch => {
    try {
      dispatch(singleEmailBegin());
      const data = initialState.allMessage.filter(email => {
        return email.id === paramsId;
      });
      dispatch(singleEmailSuccess(data));
    } catch (err) {
      dispatch(singleEmailErr(err));
    }
  };
};

export { filterSinglepage };
