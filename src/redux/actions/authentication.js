import { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } from '../configActions';

const login = () => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      window.localStorage.setItem('logedIn', true);
      dispatch(loginSuccess(true));
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      window.localStorage.removeItem('logedIn');
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
