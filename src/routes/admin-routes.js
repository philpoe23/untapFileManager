import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../container/dashboard'));

const AdminRoutes = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading....</div>}>
          <Route exact path="/" component={Dashboard} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AdminRoutes;
