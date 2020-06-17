import React from 'react';
import { InfoWraper } from './auth-info-style';
import Message from './message';
import Notification from './notification';
import Settings from './settings';
import Support from './support';
import ReactFlagsSelect from 'react-flags-select';
import { Avatar } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { Popover } from '../../popup/popup';
//import css module
import 'react-flags-select/css/react-flags-select.css';
import { logOut } from '../../../redux/authentication/actionCreator';
import { connect } from 'react-redux';
import Heading from '../../heading/heading';
import FeatherIcon from 'feather-icons-react';

const AuthInfo = ({ logOut }) => {
  const SignOut = e => {
    e.preventDefault();
    logOut();
  };

  const content = (
    <div>
      <figure>
        <img src={require('../../../static/img/avatar/chat-auth.png')} alt="" />
        <figcaption>
          <Heading as="h5">Abdullah Bin Talha</Heading>
          <p>UI Designe</p>
        </figcaption>
      </figure>
      <ul>
        <li>
          <Link to="#">
            <FeatherIcon icon="user" /> Profile
          </Link>
        </li>
        <li>
          <Link to="#">
            <FeatherIcon icon="settings" /> Settings
          </Link>
        </li>
        <li>
          <Link to="#">
            <FeatherIcon icon="dollar-sign" /> Billing
          </Link>
        </li>
        <li>
          <Link to="#">
            <FeatherIcon icon="users" /> Activity
          </Link>
        </li>
        <li>
          <Link to="#">
            <FeatherIcon icon="bell" /> Help
          </Link>
        </li>
      </ul>
      <Link onClick={SignOut} to="#">
        <FeatherIcon icon="log-out" /> Sign Out
      </Link>
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

      <div className="nav-author">
        <Popover placement="bottomLeft" content={content} trigger="click">
          <NavLink to="#" className="head-example">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
          </NavLink>
        </Popover>
      </div>
    </InfoWraper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(null, mapDispatchToProps)(AuthInfo);
