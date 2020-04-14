const LOGIN_BEGIN = 'LOGIN_BEGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERR = 'LOGIN_ERR';

const LOGOUT_BEGIN = 'LOGOUT_BEGIN';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_ERR = 'LOGOUT_ERR';

const loginBegin = () => {
  return {
    type: LOGIN_BEGIN,
  };
};
const loginSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};
const loginErr = err => {
  return {
    type: LOGIN_ERR,
    err,
  };
};

const logoutBegin = () => {
  return {
    type: LOGOUT_BEGIN,
  };
};
const logoutSuccess = data => {
  return {
    type: LOGOUT_SUCCESS,
    data,
  };
};
const logoutErr = err => {
  return {
    type: LOGOUT_ERR,
    err,
  };
};

export {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERR,
  loginBegin,
  loginSuccess,
  loginErr,
  LOGOUT_BEGIN,
  LOGOUT_SUCCESS,
  LOGOUT_ERR,
  logoutBegin,
  logoutSuccess,
  logoutErr,
};
