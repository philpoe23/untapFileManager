import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';

const Dashboard = lazy(() => import('./dashboard'));
const Ecommerce = lazy(() => import('./ecommerce'));
const Charts = lazy(() => import('./charts'));

const Admin = () => {
  return (
    <Switch>
      <Suspense fallback={<p>foo</p>}>
        <Route path="/admin" component={Dashboard} />
        <Route path="/admin/ecommerce" component={Ecommerce} />
        <Route path="/admin/charts" component={Charts} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
