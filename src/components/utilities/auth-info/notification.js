import React, { useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

const NotificationBox = props => {
  const content = (
    <div className="atbd-top-dropdwon">
      <Heading as="h5" className="atbd-top-dropdwon__title">
        <span className="title-text">Notifications</span>
        <Badge className="badge-success" count={3}></Badge>
      </Heading>
      <ul className="atbd-top-dropdwon__nav notification-list">
        <li>
          <Link to="#">
            <div className="atbd-top-dropdwon__content notifications">
              <div className="notification-icon bg-primary">
                <FeatherIcon icon="hard-drive" />
              </div>
              <div className="notification-content d-flex">
                <div className="notification-text">
                  <Heading as="h5">
                    <span>James</span> Send you a message
                  </Heading>
                  <p>5 hours ago</p>
                </div>
                <div className="notification-status">
                  <Badge dot></Badge>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="atbd-top-dropdwon__content notifications">
              <div className="notification-icon bg-secondary">
                <FeatherIcon icon="share" />
              </div>
              <div className="notification-content d-flex">
                <div className="notification-text">
                  <Heading as="h5">
                    <span>James</span> Send you a message
                  </Heading>
                  <p>5 hours ago</p>
                </div>

                <div className="notification-status">
                  <Badge dot></Badge>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="atbd-top-dropdwon__content notifications">
              <div className="notification-icon bg-secondary">
                <FeatherIcon icon="share" />
              </div>
              <div className="notification-content d-flex">
                <div className="notification-text">
                  <Heading as="h5">
                    <span>James</span> Send you a message
                  </Heading>
                  <p>5 hours ago</p>
                </div>

                <div className="notification-status">
                  <Badge dot></Badge>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="atbd-top-dropdwon__content notifications">
              <div className="notification-icon bg-secondary">
                <FeatherIcon icon="share" />
              </div>
              <div className="notification-content d-flex">
                <div className="notification-text">
                  <Heading as="h5">
                    <span>James</span> Send you a message
                  </Heading>
                  <p>5 hours ago</p>
                </div>

                <div className="notification-status">
                  <Badge dot></Badge>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="atbd-top-dropdwon__content notifications">
              <div className="notification-icon bg-secondary">
                <FeatherIcon icon="share" />
              </div>
              <div className="notification-content d-flex">
                <div className="notification-text">
                  <Heading as="h5">
                    <span>James</span> Send you a message
                  </Heading>
                  <p>5 hours ago</p>
                </div>

                <div className="notification-status">
                  <Badge dot></Badge>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <Link className="btn-seeAll" to="#">See all incoming activity</Link>
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
