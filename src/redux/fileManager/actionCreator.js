import actions from './actions';
import initialState from '../../demoData/fileManager.json';

const { fmDataBegin, fmDataSuccess, fmDataErr } = actions;

const fmGetData = () => {
  return async dispatch => {
    try {
      dispatch(fmDataBegin());
      dispatch(fmDataSuccess(initialState));
    } catch (err) {
      dispatch(fmDataErr(err));
    }
  };
};

export { fmGetData };
