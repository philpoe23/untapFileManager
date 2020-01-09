import React from 'react';
import { Badge, Popover } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NotificationBox = props => {
  const { notification } = props;
  const content = (
    <div>
      {notification.map(item => {
        const { id, from } = item;
        return (
          <p key={id}>
            <NavLink to="#">{from}</NavLink>
          </p>
        );
      })}
      <p>
        <NavLink style={{ display: 'block', textAlign: 'center' }} to="#">
          Read more
        </NavLink>
      </p>
    </div>
  );
  return (
    <div className="notification" style={{ marginTop: 10 }}>
      <Popover placement="bottomLeft" title="Notification List" content={content} trigger="click">
        <Badge dot={true} offset={[-8, -5]}>
          <NavLink to="#" className="head-example">
            <FeatherIcon icon="bell" size={20} />
          </NavLink>
        </Badge>
      </Popover>
    </div>
  );
};
NotificationBox.propTypes = {
  notification: PropTypes.array,
};
const mapSTateToProps = state => {
  return {
    notification: state.notification,
  };
};
export default connect(mapSTateToProps)(NotificationBox);
