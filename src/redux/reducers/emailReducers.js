import initialState from '../../config/dataService/emailData.json';

const emailReducer = (state = initialState, action) => {
  return state;
};

const emailSingleReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'FILTER_SINGLE_EMAIL_SUCCESS':
      return {
        allMessage: [...data],
      };
    case 'FILTER_SINGLE_EMAIL_ERR':
      return err;
    default:
      return state;
  }
};

export { emailReducer, emailSingleReducer };
