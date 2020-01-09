import React, { Fragment } from 'react';
import Header from '../../components/header/header';
import FrameOfDesktop from '../../layout/desktop';

const Desktop = props => {
  return (
    <Fragment>
      <Header name="Hello Desktop" />
    </Fragment>
  );
};

export default FrameOfDesktop(Desktop);
