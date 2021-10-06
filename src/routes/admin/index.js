import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import withAdminLayout from '../../layout/withAdminLayout';
import ViewAssets from '../../container/viewAssets/ViewAssets';
import MTACheckList from '../../container/mta_checklist/MTACheckList';
import newCheckList from '../../container/mta_checklist/overview/NewCheckList';
import ViewInformation from '../../container/viewInformation/ViewInfo';
import assetCategories from '../../container/viewInformation/overview/assetCategories';
import viewStatus from '../../container/viewInformation/overview/viewStatus';
import viewLocations from '../../container/viewInformation/overview/viewLocations';
import viewAssetTypes from '../../container/viewInformation/overview/assetTypes';
import report_0 from '../../container/reports/report_0';
import FILD from '../../container/reports/FILD';
import report_1 from '../../container/reports/report_1';
import DailyReport from '../../container/reports/DailyReport';

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
        <Route path={`${path}/viewInformation/assetcategories`} component={assetCategories} />
        <Route path={`${path}/viewInformation/status`} component={viewStatus} />
        <Route path={`${path}/viewInformation/locations`} component={viewLocations} />
        <Route path={`${path}/viewInformation/assettypes`} component={viewAssetTypes} />
        <Route path={`${path}/fuellandingrecord/view`} component={FILD} />
        <Route path={`${path}/fuellandingrecord/new`} component={report_0} />
        <Route path={`${path}/dailyReport/view`} component={DailyReport} />
        <Route path={`${path}/dailyReport/new`} component={report_1} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
