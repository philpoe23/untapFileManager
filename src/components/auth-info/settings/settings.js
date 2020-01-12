import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { PopupWithIcon } from '../../popup/popup';

const Settings = props => {
  const content = (
    <div>
      <NavLink to="#">Notification Settings</NavLink>

      <NavLink to="#">Message Settings</NavLink>

      <NavLink to="#">Menu Bar Settings</NavLink>

      <NavLink to="#">Color Settings</NavLink>
    </div>
  );

  return (
    <div style={{ marginTop: 10 }}>
      <PopupWithIcon placement="bottomLeft" title="Settings" content={content} trigger="click">
        <NavLink to="#" className="head-example">
          <FeatherIcon icon="settings" size={20} />
        </NavLink>
      </PopupWithIcon>
    </div>
  );
};

export default Settings;
