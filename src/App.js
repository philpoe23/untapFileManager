import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminRoutes from './routes/admin-routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './static/css/style.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AdminRoutes />
      </Router>
    </Provider>
  );
}

export default hot(App);
