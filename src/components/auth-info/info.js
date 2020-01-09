import React from 'react';
import { InfoWraper } from './auth-info-style';
import Message from './message/message';
import Notification from './notification/notification';
import Settings from './settings/settings';
import Support from './support/support';
import { ThemeProvider } from 'styled-components';
import theme from '../../config/theme/customize-antd';
const AuthInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <InfoWraper>
        <Message />
        <Notification />
        <Settings />
        <Support />
      </InfoWraper>
    </ThemeProvider>
  );
};

export default AuthInfo;
