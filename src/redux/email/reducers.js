import actions from './actions';
import staticData from '../../config/dataService/emailData.json';

const emailReducer = (state = staticData) => {
  return state;
};

const initialState = {
  data: staticData.allMessage,
  loading: false,
  error: null,
};

const { SINGLE_EMAIL_BEGIN, SINGLE_EMAIL_SUCCESS, SINGLE_EMAIL_ERR } = actions;

const SingleEmailReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SINGLE_EMAIL_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case SINGLE_EMAIL_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case SINGLE_EMAIL_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleEmailReducer, emailReducer };
