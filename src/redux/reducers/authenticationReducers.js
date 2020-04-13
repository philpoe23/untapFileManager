const initState = window.localStorage.getItem('logedIn');
const authReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      return data;
    case 'LOGIN_ERR':
      return err;
    case 'LOGOUT_SUCCESS':
      return data;
    case 'LOGOUT_ERR':
      return err;
    default:
      return state;
  }
};
export default authReducer;
