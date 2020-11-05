import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import Pages from './pages';
import Users from './users';
import Widgets from './widgets';
import Ecommerce from './ecommerce';
import withAdminLayout from '../../layout/withAdminLayout';

const Charts = lazy(() => import('./charts'));
const Components = lazy(() => import('./components'));
const Maps = lazy(() => import('./maps'));
const Icons = lazy(() => import('./icons'));
const Projects = lazy(() => import('./projects'));
const Calendars = lazy(() => import('../../container/Calendar'));
const Tables = lazy(() => import('./table'));
const Forms = lazy(() => import('../../container/forms/Forms'));

const Inbox = lazy(() => import('../../container/email/Email'));
const Chat = lazy(() => import('../../container/chat/ChatApp'));
const Settings = lazy(() => import('../../container/profile/settings/Settings'));
const Myprofile = lazy(() => import('../../container/profile/myProfile/Index'));
const ToDo = lazy(() => import('../../container/toDo/ToDo'));
const Note = lazy(() => import('../../container/note/Note'));
const Contact = lazy(() => import('../../container/contact/Contact'));
const ContactGrid = lazy(() => import('../../container/contact/ContactGrid'));
const Calendar = lazy(() => import('../../container/calendar/Calendar'));
const Editors = lazy(() => import('../../container/pages/Editor'));


const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path={path} component={Dashboard} />
        <Route path={`${path}/ecommerce`} component={Ecommerce} />
        <Route path={`${path}/charts`} component={Charts} />
        <Route path={`${path}/pages`} component={Pages} />
        <Route path={`${path}/users`} component={Users} />
        <Route path={`${path}/components`} component={Components} />
        <Route path={`${path}/maps`} component={Maps} />
        <Route path={`${path}/icons`} component={Icons} />
        <Route path={`${path}/project`} component={Projects} />

        <Route path={`${path}/calendar`} component={Calendars} />
        <Route path={`${path}/tables`} component={Tables} />
        <Route path={`${path}/forms`} component={Forms} />

        <Route path={`${path}/email/:page`} component={Inbox} />
        <Route path={`${path}/main/chat`} component={Chat} />
        <Route path={`${path}/profile/settings`} component={Settings} />
        <Route path={`${path}/profile/myProfile`} component={Myprofile} />
        <Route path={`${path}/app/to-do`} component={ToDo} />
        <Route path={`${path}/app/note`} component={Note} />
        <Route path={`${path}/contact/list`} component={Contact} />
        <Route path={`${path}/contact/grid`} component={ContactGrid} />
        <Route path={`${path}/app/calendar`} component={Calendar} />
        <Route path={`${path}/widgets`} component={Widgets} />
        <Route path={`${path}/editor`} component={Editors} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
