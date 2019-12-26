import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminRoutes from './routes/admin-routes';

function App() {
  return (
    <Provider store={store}>
      <AdminRoutes />
    </Provider>
  );
}

export default hot(App);
