import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store, { rrfProps } from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import './static/css/style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';
// import rtl from "styled-components-rtl";

const { theme } = config;

const ProviderConfig = () => {
  const { rtl, isLoggedIn } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      isLoggedIn: state.auth.login,
    };
  });

  return (
    <ThemeProvider theme={{ ...theme, rtl }}>
<<<<<<< HEAD
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Auth} />
            <ProtectedRoute path="/admin" component={Admin} />
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
=======
      <Router basename={process.env.PUBLIC_URL}>
        {!isLoggedIn ? <Route path="/" component={Auth} /> : <ProtectedRoute path="/admin" component={Admin} />}
      </Router>
>>>>>>> master
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default hot(App);
