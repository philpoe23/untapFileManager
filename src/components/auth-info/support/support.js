import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { PopupWithIcon } from '../../popup/popup';

const Support = props => {
  const content = (
    <div>
      <NavLink to="#">Support</NavLink>

      <NavLink to="#">Help</NavLink>

      <NavLink to="#">question</NavLink>
    </div>
  );

  return (
    <div style={{ marginTop: 10 }}>
      <PopupWithIcon placement="bottomLeft" title="Support" content={content} trigger="click">
        <NavLink to="#" className="head-example">
          <FeatherIcon icon="help-circle" size={20} />
        </NavLink>
      </PopupWithIcon>
    </div>
  );
};

export default Support;
