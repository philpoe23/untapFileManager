import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Button = lazy(() => import('../../container/ui-elements/Button'));
const Alerts = lazy(() => import('../../container/ui-elements/Alerts'));
const Modals = lazy(() => import('../../container/ui-elements/Modals'));
const Cards = lazy(() => import('../../container/ui-elements/Cards'));
const Grid = lazy(() => import('../../container/ui-elements/Grid'));
const Tabs = lazy(() => import('../../container/ui-elements/Tabs'));
const Breadcrumb = lazy(() => import('../../container/ui-elements/Breadcrumb'));
const Pagination = lazy(() => import('../../container/ui-elements/Pagination'));
const PageHeader = lazy(() => import('../../container/ui-elements/PageHeaders'));
const Steps = lazy(() => import('../../container/ui-elements/Steps'));
const Comments = lazy(() => import('../../container/ui-elements/Comments'));
const Empty = lazy(() => import('../../container/ui-elements/Empty'));
const Statistic = lazy(() => import('../../container/ui-elements/Statistic'));
const Rate = lazy(() => import('../../container/ui-elements/Rate'));
const Slider = lazy(() => import('../../container/ui-elements/Slider'));
const Progress = lazy(() => import('../../container/ui-elements/Progress'));
const Tags = lazy(() => import('../../container/ui-elements/Tags'));
const Dropdown = lazy(() => import('../../container/ui-elements/Dropdown'));
const Popover = lazy(() => import('../../container/ui-elements/Popover'));
const Timeline = lazy(() => import('../../container/ui-elements/Timeline'));
const Drawer = lazy(() => import('../../container/ui-elements/Drawer'));
const Notification = lazy(() => import('../../container/ui-elements/Notification'));
const Result = lazy(() => import('../../container/ui-elements/Result'));
const Spiner = lazy(() => import('../../container/ui-elements/Spin'));
const Carousel = lazy(() => import('../../container/ui-elements/Carousel'));
const Collapse = lazy(() => import('../../container/ui-elements/Collapse'));
const Avatar = lazy(() => import('../../container/ui-elements/Avata'));
const Badge = lazy(() => import('../../container/ui-elements/Badge'));
const AutoComplete = lazy(() => import('../../container/ui-elements/AutoComplete'));
const Checkbox = lazy(() => import('../../container/ui-elements/Checkbox'));
const Cascader = lazy(() => import('../../container/ui-elements/Cascader'));
const DatePicker = lazy(() => import('../../container/ui-elements/DatePicker'));
const Radio = lazy(() => import('../../container/ui-elements/Radio'));
const Switches = lazy(() => import('../../container/ui-elements/Switch'));
const Selects = lazy(() => import('../../container/ui-elements/Select'));
const TimePicker = lazy(() => import('../../container/ui-elements/Timepicker'));
const TreeSelect = lazy(() => import('../../container/ui-elements/TreeSelect'));
const Calendar = lazy(() => import('../../container/ui-elements/Calender'));
const Form = lazy(() => import('../../container/ui-elements/Form'));
const Skeleton = lazy(() => import('../../container/ui-elements/Skeleton'));
const List = lazy(() => import('../../container/ui-elements/List'));
const Input = lazy(() => import('../../container/ui-elements/Inputs'));
const Message = lazy(() => import('../../container/ui-elements/Messages'));
const Confirme = lazy(() => import('../../container/ui-elements/PopConfirme'));
const Menu = lazy(() => import('../../container/ui-elements/Menu'));
const Upload = lazy(() => import('../../container/ui-elements/Upload'));

const ComponentRoute = () => {
  return (
    <Switch>
      <Route path="/components/button" component={Button} />
      <Route path="/components/alerts" component={Alerts} />
      <Route path="/components/modals" component={Modals} />
      <Route path="/components/cards" component={Cards} />
      <Route path="/components/grid" component={Grid} />
      <Route path="/components/tabs" component={Tabs} />
      <Route path="/components/breadcrumb" component={Breadcrumb} />
      <Route path="/components/list" component={List} />
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
      <Route path="/components/tree-select" component={TreeSelect} />
      <Route path="/components/calendar" component={Calendar} />
      <Route path="/components/form" component={Form} />
      <Route path="/components/skeleton" component={Skeleton} />
      <Route path="/components/input" component={Input} />
      <Route path="/components/message" component={Message} />
      <Route path="/components/confirme" component={Confirme} />
      <Route path="/components/menu" component={Menu} />
      <Route path="/components/upload" component={Upload} />
    </Switch>
  );
};

export default ComponentRoute;
