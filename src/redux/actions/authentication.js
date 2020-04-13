const login = () => {
  return async dispatch => {
    try {
      window.localStorage.setItem('logedIn', true);
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: true,
      });
    } catch (err) {
      dispatch({
        type: 'LOGIN_ERR',
        err,
      });
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      window.localStorage.removeItem('logedIn');
      dispatch({
        type: 'LOGOUT_SUCCESS',
        data: null,
      });
    } catch (err) {
      dispatch({
        type: 'LOGOUT_ERR',
        err,
      });
    }
  };
};

export { login, logOut };
