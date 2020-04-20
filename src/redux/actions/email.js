import initialState from '../../config/dataService/emailData.json';
const filterSinglepage = paramsId => {
  return async dispatch => {
    try {
      const data = initialState.allMessage.filter(email => {
        return email.id === paramsId;
      });
      dispatch({
        type: 'FILTER_SINGLE_EMAIL_SUCCESS',
        data: data,
      });
    } catch (err) {
      dispatch({
        type: 'FILTER_SINGLE_EMAIL_ERR',
        err,
      });
    }
  };
};

export { filterSinglepage };
