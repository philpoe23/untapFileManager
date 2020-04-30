import React, { useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Popover } from '../../popup/popup';
import { readNotificationList } from '../../../redux/notification/actionCreator';

const NotificationBox = props => {
  const { notification, readNotification } = props;
  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      readNotification();
    }
    return () => {
      unmount = true;
    };
  });
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
  readNotification: PropTypes.func,
  notification: PropTypes.array,
};
const mapSTateToProps = state => {
  return {
    notification: state.notification.data,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    readNotification: () => dispatch(readNotificationList()),
  };
};
export default connect(mapSTateToProps, mapDispatchToProps)(NotificationBox);
