import actions from './actions';
import initialState from '../../demoData/emailData.json';

const {
  singleEmailBegin,
  singleEmailSuccess,
  singleEmailErr,
  starUpdateBegin,
  starUpdateSuccess,
  starUpdateErr,
} = actions;

const filterSinglePage = paramsId => {
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

const onStarUpdate = id => {
  return async dispatch => {
    try {
      dispatch(starUpdateBegin());
      initialState.allMessage.map(email => {
        if (email.id === id) {
          return email.stared ? (email.stared = false) : (email.stared = true);
        }
        return dispatch(starUpdateSuccess(initialState.allMessage));
      });
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

export { filterSinglePage, onStarUpdate };
