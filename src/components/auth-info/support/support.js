import React from 'react';
import { Popover } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';

const Support = props => {
  const content = (
    <div>
      <p>
        <NavLink to="#">Support</NavLink>
      </p>
      <p>
        <NavLink to="#">Help</NavLink>
      </p>
      <p>
        <NavLink to="#">question</NavLink>
      </p>
    </div>
  );

  return (
    <div style={{ marginTop: 10 }}>
      <Popover placement="bottomLeft" title="Support" content={content} trigger="click">
        <NavLink to="#" className="head-example">
          <FeatherIcon icon="help-circle" size={20} />
        </NavLink>
      </Popover>
    </div>
  );
};

export default Support;
