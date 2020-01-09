import React from 'react';
import { Popover } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

const Settings = props => {
  const content = (
    <div>
      <p>
        <NavLink to="#">Notification Settings</NavLink>
      </p>
      <p>
        <NavLink to="#">Message Settings</NavLink>
      </p>
      <p>
        <NavLink to="#">Menu Bar Settings</NavLink>
      </p>
      <p>
        <NavLink to="#">Color Settings</NavLink>
      </p>
    </div>
  );

  return (
    <div style={{ marginTop: 10 }}>
      <Popover placement="bottomLeft" title="Settings" content={content} trigger="click">
        <NavLink to="#" className="head-example">
          <FeatherIcon icon="settings" size={20} />
        </NavLink>
      </Popover>
    </div>
  );
};

export default Settings;
