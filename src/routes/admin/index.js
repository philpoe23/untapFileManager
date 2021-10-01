import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import withAdminLayout from '../../layout/withAdminLayout';
import ViewAssets from '../../container/viewAssets/ViewAssets';
import MTACheckList from '../../container/mta_checklist/MTACheckList';
import newCheckList from '../../container/mta_checklist/overview/NewCheckList';

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
        <Route path={`${path}/viewAssets`} component={ViewAssets} />
        <Route path={`${path}/MTACheckList/view`} component={MTACheckList} />
        <Route path={`${path}/MTACheckList/new`} component={newCheckList} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
