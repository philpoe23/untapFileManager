import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../../container/dashboard'));
const DashboardBase = lazy(() => import('../../container/dashboard/DashboardBase'));
const Ecommerce = lazy(() => import('../../container/dashboard/Ecommerce'));
const Business = lazy(() => import('../../container/dashboard/Business'));
const Performance = lazy(() => import('../../container/dashboard/Performance'));

const DashboardRoutes = ({ location: { pathname } }) => {
  return (
    <Switch>
      <Route exact path={'admin'} component={Dashboard} />
      <Route exact path={`/${pathname}/dashboard/base`} component={DashboardBase} />
      <Route exact path={`/${pathname}/dashboard/ecommerce`} component={Ecommerce} />
      <Route exact path={`/${pathname}/dashboard/business`} component={Business} />
      <Route exact path={`/${pathname}dashboard/performance`} component={Performance} />
    </Switch>
  );
};

export default DashboardRoutes;
