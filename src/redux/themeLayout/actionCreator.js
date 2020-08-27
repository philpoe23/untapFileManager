import actions from './actions';

const { changeLayoutBegin, changeLayoutSuccess, changeLayoutErr } = actions;

const changeLayoutMode = value => {
  return async dispatch => {
    try {
      dispatch(changeLayoutBegin());
      dispatch(changeLayoutSuccess(value));
    } catch (err) {
      dispatch(changeLayoutErr(err));
    }
  };
};

export { changeLayoutMode };
