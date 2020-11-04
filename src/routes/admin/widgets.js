import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Charts = lazy(() => import('../../container/widgets/Charts'));
const Carts = lazy(() => import('../../container/widgets/Cards'));

const WidgetsRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>      
      <Route path={`${path}/chart`} component={Charts} />
      <Route path={`${path}/card`} component={Carts} />
    </Switch>
  );
};

export default WidgetsRoute;
