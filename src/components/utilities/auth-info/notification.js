import React, { useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

const NotificationBox = props => {
  const content = (
    <div>
      <Heading as="h5">
        Notifications <Badge count={3}></Badge>
      </Heading>
      <ul>
        <li>
          <Link to="#">
            <div>
              <FeatherIcon icon="hard-drive" />
              <div>
                <Heading as="h5">
                  <span>James</span> Send you a message
                </Heading>
                <p>5 hours ago</p>
                <Badge dot></Badge>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div>
              <FeatherIcon icon="share" />
              <div>
                <Heading as="h5">
                  <span>James</span> Send you a message
                </Heading>
                <p>5 hours ago</p>
                <Badge dot></Badge>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link to="#">See all incoming activity</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="notification">
      <Popover placement="bottomLeft" content={content} trigger="click">
        <Badge dot={true} offset={[-8, -5]}>
          <Link to="#" className="head-example">
            <FeatherIcon icon="bell" size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
};

NotificationBox.propTypes = {
  notification: PropTypes.array,
};

export default NotificationBox;
