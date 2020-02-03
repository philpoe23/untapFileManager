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
const Alerts = lazy(() => import('../container/ui-elements/alerts/alerts'));
const Modals = lazy(() => import('../container/ui-elements/modals/modals'));
const Cards = lazy(() => import('../container/ui-elements/cards/cards'));
const Grid = lazy(() => import('../container/ui-elements/grid/grid'));
const Tabs = lazy(() => import('../container/ui-elements/tabs/tabs'));
const Breadcrumb = lazy(() => import('../container/ui-elements/breadcrumb/breadcrumb'));
const Pagination = lazy(() => import('../container/ui-elements/pagination/pagination'));
const PageHeader = lazy(() => import('../container/ui-elements/page-headers/page-headers'));
const Steps = lazy(() => import('../container/ui-elements/steps/steps'));
const Comments = lazy(() => import('../container/ui-elements/comments/comments'));
const Empty = lazy(() => import('../container/ui-elements/empty/empty'));
const Statistic = lazy(() => import('../container/ui-elements/statistic/statistic'));
const Rate = lazy(() => import('../container/ui-elements/rate/rate'));
const Slider = lazy(() => import('../container/ui-elements/slider/slider'));
const Progress = lazy(() => import('../container/ui-elements/progress/progress'));
const Tags = lazy(() => import('../container/ui-elements/tags/tags'));
const Dropdown = lazy(() => import('../container/ui-elements/dropdown/dropdown'));
const Popover = lazy(() => import('../container/ui-elements/popover/popover'));
const Timeline = lazy(() => import('../container/ui-elements/timeline/timeline'));
const Drawer = lazy(() => import('../container/ui-elements/drawer/drawer'));
const Notification = lazy(() => import('../container/ui-elements/notification/notification'));
const Result = lazy(() => import('../container/ui-elements/result/result'));
const Spiner = lazy(() => import('../container/ui-elements/spin/spin'));
const Carousel = lazy(() => import('../container/ui-elements/carousel/carousel'));
const Collapse = lazy(() => import('../container/ui-elements/collapse/collapse'));
const Avatar = lazy(() => import('../container/ui-elements/avatar/avata'));
const Badge = lazy(() => import('../container/ui-elements/badge/badge'));
const AutoComplete = lazy(() => import('../container/ui-elements/autoComplete/autoComplete'));

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

        <Route path="/maps/google" component={GoogleMaps} />
        <Route path="/maps/leaflet" component={Osm} />
        <Route path="/maps/vector" component={Vector} />
        <Route path="/icon/feathers" component={Feathers} />
        <Route path="/icon/font-awesome" component={Fa} />
        <Route path="/icon/line-awesome" component={La} />
        <Route path="/icon/antd" component={AntdIcons} />

        <Route path="/components/button" component={Button} />
        <Route path="/components/alerts" component={Alerts} />
        <Route path="/components/modals" component={Modals} />
        <Route path="/components/cards" component={Cards} />
        <Route path="/components/grid" component={Grid} />
        <Route path="/components/tabs" component={Tabs} />
        <Route path="/components/breadcrumb" component={Breadcrumb} />
        <Route path="/components/pagination" component={Pagination} />
        <Route path="/components/page-headers" component={PageHeader} />
        <Route path="/components/steps" component={Steps} />
        <Route path="/components/comments" component={Comments} />
        <Route path="/components/empty" component={Empty} />
        <Route path="/components/statistic" component={Statistic} />
        <Route path="/components/rate" component={Rate} />
        <Route path="/components/slider" component={Slider} />
        <Route path="/components/progress" component={Progress} />
        <Route path="/components/tags" component={Tags} />
        <Route path="/components/dropdown" component={Dropdown} />
        <Route path="/components/popover" component={Popover} />
        <Route path="/components/timeline" component={Timeline} />
        <Route path="/components/drawer" component={Drawer} />
        <Route path="/components/notification" component={Notification} />
        <Route path="/components/result" component={Result} />
        <Route path="/components/spiner" component={Spiner} />
        <Route path="/components/carousel" component={Carousel} />
        <Route path="/components/collapse" component={Collapse} />
        <Route path="/components/avatar" component={Avatar} />
        <Route path="/components/badge" component={Badge} />
        <Route path="/components/auto-complete" component={AutoComplete} />
      </Suspense>
    </Switch>
  );
};

export default Layout(AdminRoutes);
