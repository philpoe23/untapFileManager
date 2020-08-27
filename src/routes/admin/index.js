import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';

const Dashboard = lazy(() => import('./dashboard'));
const Ecommerce = lazy(() => import('./ecommerce'));
const Charts = lazy(() => import('./charts'));
const Pages = lazy(() => import('./pages'));
const Components = lazy(() => import('./components'));
const Maps = lazy(() => import('./maps'));
const Icons = lazy(() => import('./icons'));
const Projects = lazy(() => import('./projects'));
const Calendars = lazy(() => import('../../container/Calendar'));
const Tables = lazy(() => import('../../container/table/Table'));
const Forms = lazy(() => import('../../container/forms/Forms'));

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense fallback={<p>foo</p>}>
        <Route path={path} component={Dashboard} />
        <Route path={`${path}/ecommerce`} component={Ecommerce} />
        <Route path={`${path}/charts`} component={Charts} />
        <Route path={`${path}/pages`} component={Pages} />
        <Route path={`${path}/components`} component={Components} />
        <Route path={`${path}/maps`} component={Maps} />
        <Route path={`${path}/icons`} component={Icons} />
        <Route path={`${path}/project`} component={Projects} />

        <Route path="/calendar" component={Calendars} />
        <Route path="/tables" component={Tables} />
        <Route path="/forms" component={Forms} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
