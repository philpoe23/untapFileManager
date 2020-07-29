import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import propTypes from 'prop-types';
import store from './redux/store';
import AdminRoutes from './routes/admin-routes';
import FrontendRoutes from './routes/frontend-routes';
import './static/css/style.css';
import config from './config/config';

const { theme } = config;

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

App.propTypes = {
  auth: propTypes.string.isRequired,
};
const MyApp = connect(mapStateToProps)(App);

const StoreReturn = () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
};

export default hot(StoreReturn);
