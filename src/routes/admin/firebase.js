import React, { lazy } from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, useRouteMatch } from 'react-router-dom';

const FbView = lazy(() => import('../../container/curd/fireStore/View'));
const FbAdd = lazy(() => import('../../container/curd/fireStore/addNew'));
const FbUpdate = lazy(() => import('../../container/curd/fireStore/edit'));

const FirebaseRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/view`} component={FbView} />
      <Route path={`${path}/add`} component={FbAdd} />
      <Route exact path={`${path}/edit/:id`} component={FbUpdate} />
    </Switch>
  );
};

export default FirebaseRoute;
