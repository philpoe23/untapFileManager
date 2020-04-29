import React from 'react';
import { InfoWraper } from './auth-info-style';
import Message from './message';
import Notification from './notification';
import Settings from './settings';
import Support from './support';
import ReactFlagsSelect from 'react-flags-select';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { Popover } from '../popup/popup';
//import css module
import 'react-flags-select/css/react-flags-select.css';
import { logOut } from '../../redux/authentication/actionCreator';
import { connect } from 'react-redux';

const AuthInfo = ({ logOut }) => {
  const SignOut = e => {
    e.preventDefault();
    logOut();
  };

  const content = (
    <div>
      <NavLink to="#">Mohammad Amir</NavLink>
      <NavLink to="#">amir@gmail.com</NavLink>
      <NavLink onClick={SignOut} to="#">
        Logout
      </NavLink>
    </div>
  );

  return (
    <InfoWraper>
      <Message />
      <Notification />

      <Settings />
      <Support />

      <ReactFlagsSelect
        countries={['US', 'GB', 'FR', 'DE', 'IT']}
        customLabels={{ US: 'EN-US', GB: 'EN-GB', FR: 'FR', DE: 'DE', IT: 'IT' }}
        defaultCountry="US"
        showSelectedLabel={false}
        showOptionLabel={false}
        selectedSize={14}
        optionsSize={14}
      />

      <Popover placement="bottomLeft" title="Amir" content={content} trigger="click">
        <NavLink to="#" className="head-example">
          <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
        </NavLink>
      </Popover>
    </InfoWraper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(null, mapDispatchToProps)(AuthInfo);
