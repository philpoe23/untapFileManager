import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const NotFound = lazy(() => import('../../container/pages/404'));
const Maintenance = lazy(() => import('../../container/pages/Maintenance'));
const Pricing = lazy(() => import('../../container/pages/PricingTable'));
const Gallery = lazy(() => import('../../container/pages/Gallery'));
const Faq = lazy(() => import('../../container/pages/Faq'));
const Search = lazy(() => import('../../container/pages/SearchResult'));
const Users = lazy(() => import('../../container/pages/Users'));
const AddUser = lazy(() => import('../../container/pages/AddUsers'));
const DataTable = lazy(() => import('../../container/pages/UserListDataTable'));
const Team = lazy(() => import('../../container/pages/Team'));

const PagesRoute = () => {
  return (
    <Switch>
      <Route path="/pages/404" component={NotFound} />
      <Route path="/pages/maintenance" component={Maintenance} />
      <Route path="/pages/Pricing" component={Pricing} />
      <Route path="/pages/gallery" component={Gallery} />
      <Route path="/pages/faq" component={Faq} />
      <Route path="/pages/search" component={Search} />
      <Route path="/pages/users" component={Users} />
      <Route path="/pages/add-user" component={AddUser} />
      <Route path="/pages/dataTable" component={DataTable} />
      <Route path="/pages/team" component={Team} />
    </Switch>
  );
};

export default PagesRoute;
