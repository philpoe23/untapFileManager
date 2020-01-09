import React, { Fragment } from 'react';
import Header from '../../components/header/header';
import FrameOfDashboard from '../../layout/dashboard';

const Dashbord = props => {
  return (
    <Fragment>
      <Header name="Hello Aazztech" />
    </Fragment>
  );
};

export default FrameOfDashboard(Dashbord);
