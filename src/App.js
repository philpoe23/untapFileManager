import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store, { rrfProps } from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import './static/css/style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';

const { theme } = config;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Auth} />
            <ProtectedRoute path="/admin" component={Admin} />
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default hot(App);
