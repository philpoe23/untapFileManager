import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layout/layout';
const Dashboard = lazy(() => import('../container/dashboard'));
// charts
const ChartJs = lazy(() => import('../container/charts/chart-js/chart-js'));
const GoogleChart = lazy(() => import('../container/charts/google-chart/google'));
const RechartsBarChart = lazy(() => import('../container/charts/recharts/bar'));
const RechartsAreaChart = lazy(() => import('../container/charts/recharts/area'));
const RechartsComposed = lazy(() => import('../container/charts/recharts/composed'));
const RechartsLine = lazy(() => import('../container/charts/recharts/line'));
const RechartsPie = lazy(() => import('../container/charts/recharts/pie'));
const RechartsRadar = lazy(() => import('../container/charts/recharts/radar'));
const RechartsRadial = lazy(() => import('../container/charts/recharts/radial'));
const Peity = lazy(() => import('../container/charts/peity/peity'));

// maps
const GoogleMaps = lazy(() => import('../container/maps/google-maps'));

const AdminRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading....</div>}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/chartjs" component={ChartJs} />
        <Route path="/google-chart" component={GoogleChart} />
        <Route path="/recharts/bar" component={RechartsBarChart} />
        <Route path="/recharts/area" component={RechartsAreaChart} />
        <Route path="/recharts/composed" component={RechartsComposed} />
        <Route path="/recharts/line" component={RechartsLine} />
        <Route path="/recharts/pie" component={RechartsPie} />
        <Route path="/recharts/radar" component={RechartsRadar} />
        <Route path="/recharts/radial" component={RechartsRadial} />
        <Route path="/peity" component={Peity} />
        <Route path="/maps/google" component={GoogleMaps} />
      </Suspense>
    </Switch>
  );
};

export default Layout(AdminRoutes);
