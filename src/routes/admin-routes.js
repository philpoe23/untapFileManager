import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layout/layout';
const Dashboard = lazy(() => import('../container/dashboard'));
const Desktop = lazy(() => import('../container/desktop/desktop'));

const AdminRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading....</div>}>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/desktop" component={Desktop} />
      </Suspense>
    </Switch>
  );
};

export default Layout(AdminRoutes);
