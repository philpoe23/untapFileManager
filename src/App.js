import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './redux/store';
import { rrfProps } from './redux/store';
import AdminRoutes from './routes/admin-routes';
import { connect } from 'react-redux';
import FrontendRoutes from './routes/frontend-routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './static/css/style.css';
import theme from './config/theme/customize-antd';

function App({ auth }) {
  const [state, setState] = useState({
    isLogedIn: auth,
  });
  const { isLogedIn } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        isLogedIn: auth,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [auth]);

  return (
    <ThemeProvider theme={theme}>
      <Router>{isLogedIn === null ? <FrontendRoutes /> : <AdminRoutes />}</Router>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth.login,
  };
};
const MyApp = connect(mapStateToProps)(App);

const StoreReturn = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <MyApp />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};
export default hot(StoreReturn);
