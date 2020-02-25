import React from 'react';
import { InfoWraper } from './auth-info-style';
import Message from './message';
import Notification from './notification';
import Settings from './settings';
import Support from './support';
import { ThemeProvider } from 'styled-components';
import theme from '../../config/theme/customize-antd';
import ReactFlagsSelect from 'react-flags-select';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { PopupWithIcon } from '../popup/popup';
//import css module
import 'react-flags-select/css/react-flags-select.css';

const content = (
  <div>
    <NavLink to="#">Mohammad Amir</NavLink>
    <NavLink to="#">amir@gmail.com</NavLink>
    <NavLink to="#">Logout</NavLink>
  </div>
);
const AuthInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <InfoWraper>
        <Message />
        <Notification />
        <Settings />
        <Support />
        <ReactFlagsSelect countries={['US', 'GB', 'FR', 'DE', 'IT']} customLabels={{ US: 'EN-US', GB: 'EN-GB', FR: 'FR', DE: 'DE', IT: 'IT' }} defaultCountry="US" showSelectedLabel={false} showOptionLabel={false} selectedSize={14} optionsSize={14} />
        <PopupWithIcon placement="bottomLeft" title="Amir" content={content} trigger="click">
          <NavLink to="#" className="head-example">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
          </NavLink>
        </PopupWithIcon>
      </InfoWraper>
    </ThemeProvider>
  );
};

export default AuthInfo;
