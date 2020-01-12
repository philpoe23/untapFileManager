import React, { Fragment } from 'react';
import Header from '../../components/header/header';
import PageHeader from '../../components/page-header/page-header';
import FrameOfDashboard from '../../layout/dashboard';

const Dashbord = props => {
  return (
    <Fragment>
      <PageHeader title="Social Media Dashboard" />
      <Header />
    </Fragment>
  );
};

export default FrameOfDashboard(Dashbord);
