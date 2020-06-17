import React from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

const MessageBox = props => {
  const content = (
    <div>
      <Heading as="h5">
        Messages <Badge count={3}></Badge>
      </Heading>
      <ul>
        <li>
          <Link to="#">
            <figure>
              <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
              <figcaption>
                <Heading as="h5">
                  Software <span>3 hrs ago</span>
                </Heading>
                <p>
                  Lorem ipsum dolor amet cosec...
                  <span>
                    <Badge count={3}></Badge>
                  </span>
                </p>
              </figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="#">
            <figure>
              <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
              <figcaption>
                <Heading as="h5">
                  Software <span>3 hrs ago</span>
                </Heading>
                <p>
                  Lorem ipsum dolor amet cosec...
                  <span>
                    <Badge count={3}></Badge>
                  </span>
                </p>
              </figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="#">See all messages</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="message">
      <Popover placement="bottomLeft" content={content} trigger="click">
        <Badge dot={true} offset={[-8, -5]}>
          <Link to="#" className="head-example">
            <FeatherIcon icon="mail" size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
};

MessageBox.propTypes = {
  message: PropTypes.array,
};

export default MessageBox;
