import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider, connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import propTypes from 'prop-types';
import store from './redux/store';
import AdminRoutes from './routes/admin-routes';
import FrontendRoutes from './routes/frontend-routes';
import './static/css/style.css';
import { theme } from './config/theme/themeVariables';
import { DataService } from './config/dataService/dataService';

function App({ auth }) {
  const [state, setState] = useState({
    isLogedIn: auth,
  });
  const { isLogedIn } = state;

  useEffect(() => {
    if (auth) {
      setState({
        isLogedIn: auth,
      });
    }
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
  auth: propTypes.oneOf([true, false, null]).isRequired,
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
