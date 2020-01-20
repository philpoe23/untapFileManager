import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
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
const Osm = lazy(() => import('../container/maps/leaflet'));
const Vector = lazy(() => import('../container/maps/vector'));

// Icons
const Feathers = lazy(() => import('../container/icons/feather-icons'));
const Fa = lazy(() => import('../container/icons/fa-icons'));
const La = lazy(() => import('../container/icons/la-icons'));
const AntdIcons = lazy(() => import('../container/icons/antd-icons'));

// UI-Elements
const Button = lazy(() => import('../container/ui-elements/button/button'));

const AdminRoutes = () => {
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
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
        <Route path="/maps/leaflet" component={Osm} />
        <Route path="/maps/vector" component={Vector} />
        <Route path="/icon/feathers" component={Feathers} />
        <Route path="/icon/font-awesome" component={Fa} />
        <Route path="/icon/line-awesome" component={La} />
        <Route path="/icon/antd" component={AntdIcons} />

        <Route path="/components/button" component={Button} />
      </Suspense>
    </Switch>
  );
};

export default Layout(AdminRoutes);
