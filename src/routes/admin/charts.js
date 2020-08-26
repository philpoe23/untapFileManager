import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const ChartJs = lazy(() => import('../../container/charts/ChartJs'));
const GoogleChart = lazy(() => import('../../container/charts/GoogleCharts'));
const Peity = lazy(() => import('../../container/charts/Peity'));
const RechartsBarChart = lazy(() => import('../../container/charts/recharts/Bar'));
const RechartsAreaChart = lazy(() => import('../../container/charts/recharts/Area'));
const RechartsComposed = lazy(() => import('../../container/charts/recharts/Composed'));
const RechartsLine = lazy(() => import('../../container/charts/recharts/Line'));
const RechartsPie = lazy(() => import('../../container/charts/recharts/Pie'));
const RechartsRadar = lazy(() => import('../../container/charts/recharts/Radar'));
const RechartsRadial = lazy(() => import('../../container/charts/recharts/Radial'));

const ChartRoute = () => {
  return (
    <Switch>
      <Route path="/charts/chartjs" component={ChartJs} />
      <Route path="/charts/google-chart" component={GoogleChart} />
      <Route path="/charts/recharts/bar" component={RechartsBarChart} />
      <Route path="/charts/recharts/area" component={RechartsAreaChart} />
      <Route path="/charts/recharts/composed" component={RechartsComposed} />
      <Route path="/charts/recharts/line" component={RechartsLine} />
      <Route path="/charts/recharts/pie" component={RechartsPie} />
      <Route path="/charts/recharts/radar" component={RechartsRadar} />
      <Route path="/charts/recharts/radial" component={RechartsRadial} />
      <Route path="/charts/peity" component={Peity} />
    </Switch>
  );
};

export default ChartRoute;
