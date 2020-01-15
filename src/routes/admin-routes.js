import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layout/layout';
const Dashboard = lazy(() => import('../container/dashboard'));
const ChartJs = lazy(() => import('../container/charts/chart-js/chart-js'));
const GoogleChart = lazy(() => import('../container/charts/google-chart/google'));
const RechartsBarChart = lazy(() => import('../container/charts/recharts/bar'));
const RechartsAreaChart = lazy(() => import('../container/charts/recharts/area'));

const AdminRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading....</div>}>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/chartjs" component={ChartJs} />
        <Route exact path="/google-chart" component={GoogleChart} />
        <Route exact path="/recharts/bar" component={RechartsBarChart} />
        <Route exact path="/recharts/area" component={RechartsAreaChart} />
      </Suspense>
    </Switch>
  );
};

export default Layout(AdminRoutes);
