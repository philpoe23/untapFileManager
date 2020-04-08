import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';
import ThemeLayout from '../layout/Layout';
const Dashboard = lazy(() => import('../container/dashboard'));
const DashboardBase = lazy(() => import('../container/dashboard/DashboardBase'));
const Ecommerce = lazy(() => import('../container/dashboard/Ecommerce'));
const Business = lazy(() => import('../container/dashboard/Business'));
const Performance = lazy(() => import('../container/dashboard/Performance'));

const ProductGrid = lazy(() => import('../container/ecommerce/product/ProductGrid'));
const ProductList = lazy(() => import('../container/ecommerce/product/ProductList'));

const Calendars = lazy(() => import('../container/Calendar'));

// charts
const ChartJs = lazy(() => import('../container/charts/ChartJs'));
const GoogleChart = lazy(() => import('../container/charts/GoogleCharts'));
const Peity = lazy(() => import('../container/charts/Peity'));
const RechartsBarChart = lazy(() => import('../container/charts/recharts/Bar'));
const RechartsAreaChart = lazy(() => import('../container/charts/recharts/Area'));
const RechartsComposed = lazy(() => import('../container/charts/recharts/Composed'));
const RechartsLine = lazy(() => import('../container/charts/recharts/Line'));
const RechartsPie = lazy(() => import('../container/charts/recharts/Pie'));
const RechartsRadar = lazy(() => import('../container/charts/recharts/Radar'));
const RechartsRadial = lazy(() => import('../container/charts/recharts/Radial'));

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
const Button = lazy(() => import('../container/ui-elements/Button'));
const Alerts = lazy(() => import('../container/ui-elements/Alerts'));
const Modals = lazy(() => import('../container/ui-elements/Modals'));
const Cards = lazy(() => import('../container/ui-elements/Cards'));
const Grid = lazy(() => import('../container/ui-elements/Grid'));
const Tabs = lazy(() => import('../container/ui-elements/Tabs'));
const Breadcrumb = lazy(() => import('../container/ui-elements/Breadcrumb'));
const Pagination = lazy(() => import('../container/ui-elements/Pagination'));
const PageHeader = lazy(() => import('../container/ui-elements/PageHeaders'));
const Steps = lazy(() => import('../container/ui-elements/Steps'));
const Comments = lazy(() => import('../container/ui-elements/Comments'));
const Empty = lazy(() => import('../container/ui-elements/Empty'));
const Statistic = lazy(() => import('../container/ui-elements/Statistic'));
const Rate = lazy(() => import('../container/ui-elements/Rate'));
const Slider = lazy(() => import('../container/ui-elements/Slider'));
const Progress = lazy(() => import('../container/ui-elements/Progress'));
const Tags = lazy(() => import('../container/ui-elements/Tags'));
const Dropdown = lazy(() => import('../container/ui-elements/Dropdown'));
const Popover = lazy(() => import('../container/ui-elements/Popover'));
const Timeline = lazy(() => import('../container/ui-elements/Timeline'));
const Drawer = lazy(() => import('../container/ui-elements/Drawer'));
const Notification = lazy(() => import('../container/ui-elements/Notification'));
const Result = lazy(() => import('../container/ui-elements/Result'));
const Spiner = lazy(() => import('../container/ui-elements/Spin'));
const Carousel = lazy(() => import('../container/ui-elements/Carousel'));
const Collapse = lazy(() => import('../container/ui-elements/Collapse'));
const Avatar = lazy(() => import('../container/ui-elements/Avata'));
const Badge = lazy(() => import('../container/ui-elements/Badge'));
const AutoComplete = lazy(() => import('../container/ui-elements/AutoComplete'));
const Checkbox = lazy(() => import('../container/ui-elements/Checkbox'));
const Cascader = lazy(() => import('../container/ui-elements/Cascader'));
const DatePicker = lazy(() => import('../container/ui-elements/DatePicker'));
const Radio = lazy(() => import('../container/ui-elements/Radio'));
const Switches = lazy(() => import('../container/ui-elements/Switch'));
const Selects = lazy(() => import('../container/ui-elements/Select'));
const TimePicker = lazy(() => import('../container/ui-elements/Timepicker'));
const Calendar = lazy(() => import('../container/ui-elements/Calender'));
const Form = lazy(() => import('../container/ui-elements/Form'));
const Skeleton = lazy(() => import('../container/ui-elements/Skeleton'));

const Inbox = lazy(() => import('../container/email/Inbox'));
const Sent = lazy(() => import('../container/email/Sent'));
const Starred = lazy(() => import('../container/email/Starred'));
const Draft = lazy(() => import('../container/email/Draft'));
const Trash = lazy(() => import('../container/email/Trash'));
const Spam = lazy(() => import('../container/email/Spam'));

const Chat = lazy(() => import('../container/chat/ChatApp'));
const NotFound = lazy(() => import('../container/pages/404'));
const Maintenance = lazy(() => import('../container/pages/Maintenance'));
const Pricing = lazy(() => import('../container/pages/pricingTable'));

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
        <Route path="/dashbord/base" component={DashboardBase} />
        <Route path="/dashbord/ecommerce" component={Ecommerce} />
        <Route path="/dashbord/business" component={Business} />
        <Route path="/dashbord/performance" component={Performance} />

        <Route path="/ecommerce/productGrid" component={ProductGrid} />
        <Route path="/ecommerce/productList" component={ProductList} />

        <Route path="/calendar" component={Calendars} />

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
        <Route path="/components/checkbox" component={Checkbox} />
        <Route path="/components/cascader" component={Cascader} />
        <Route path="/components/date-picker" component={DatePicker} />
        <Route path="/components/radio" component={Radio} />
        <Route path="/components/switch" component={Switches} />
        <Route path="/components/select" component={Selects} />
        <Route path="/components/timePicker" component={TimePicker} />
        <Route path="/components/calendar" component={Calendar} />
        <Route path="/components/form" component={Form} />
        <Route path="/components/skeleton" component={Skeleton} />

        <Route path="/email/inbox" component={Inbox} />
        <Route path="/email/sent" component={Sent} />
        <Route path="/email/starred" component={Starred} />
        <Route path="/email/drafts" component={Draft} />
        <Route path="/email/trash" component={Trash} />
        <Route path="/email/spam" component={Spam} />

        <Route path="/chat/app" component={Chat} />
        <Route path="/pages/404" component={NotFound} />
        <Route path="/pages/maintenance" component={Maintenance} />
        <Route path="/pages/pricing" component={Pricing} />
      </Suspense>
    </Switch>
  );
};

export default ThemeLayout(AdminRoutes);
