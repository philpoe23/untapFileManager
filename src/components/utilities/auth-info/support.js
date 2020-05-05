import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { Popover } from '../../popup/popup';

const Support = () => {
  const content = (
    <div>
      <NavLink to="#">Support</NavLink>
      <NavLink to="#">Help</NavLink>
      <NavLink to="#">question</NavLink>
    </div>
  );

  return (
    <div className="support">
      <Popover placement="bottomLeft" title="Support" content={content} trigger="click">
        <NavLink to="#" className="head-example">
          <FeatherIcon icon="help-circle" size={20} />
        </NavLink>
      </Popover>
    </div>
  );
};

export default Support;
