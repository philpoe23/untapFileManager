import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
// import { ConfigProvider } from 'antd';
import store from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import './static/css/style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';
import { changeRtlMode } from './redux/themeLayout/actionCreator';

const { theme } = config;

const ProviderConfig = () => {
  const dispatch = useDispatch();
  const { rtl, isLoggedIn } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      isLoggedIn: state.auth.login,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    return () => (unmounted = true);
  }, [setPath]);

  const onRtlChange = () => {
    const html = document.querySelector('html');
    html.setAttribute('dir', !rtl ? 'rtl' : 'ltr');
    dispatch(changeRtlMode(!rtl));
  };

  return (
    // <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
    <ThemeProvider theme={{ ...theme, rtl }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Link onClick={onRtlChange} to="#" className="btn-rtl">
          {!rtl ? 'RTL' : 'LTR'}
        </Link>

        {!isLoggedIn ? <Route path="/" component={Auth} /> : <ProtectedRoute path="/admin" component={Admin} />}
        {isLoggedIn && (path === process.env.PUBLIC_URL || path === `${process.env.PUBLIC_URL}/`) && (
          <Redirect to="/admin" />
        )}
      </Router>
    </ThemeProvider>
    // </ConfigProvider>
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
