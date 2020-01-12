import React from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PopupWithIcon } from '../../popup/popup';

const NotificationBox = props => {
  const { notification } = props;
  const content = (
    <div>
      {notification.map(item => {
        const { id, from } = item;
        return (
          <NavLink key={id} to="#">
            {from}
          </NavLink>
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
      <PopupWithIcon placement="bottomLeft" title="Notification List" content={content} trigger="click">
        <Badge dot={true} offset={[-8, -5]}>
          <NavLink to="#" className="head-example">
            <FeatherIcon icon="bell" size={20} />
          </NavLink>
        </Badge>
      </PopupWithIcon>
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
