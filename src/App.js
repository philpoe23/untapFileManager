import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import AdminRoutes from './routes/admin-routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './static/css/style.css';
import theme from './config/theme/customize-antd';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AdminRoutes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default hot(App);
