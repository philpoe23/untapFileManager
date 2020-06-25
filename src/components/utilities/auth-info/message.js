import React from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';
import { Scrollbars } from 'react-custom-scrollbars';

const MessageBox = props => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const content = (
    <div className="atbd-top-dropdwon">
      <Heading className="atbd-top-dropdwon__title" as="h5">
        <span className="title-text">Messages</span>
        <Badge className="badge-success" count={3}></Badge>
      </Heading>
      <Scrollbars autoHeight autoHide renderThumbVertical={renderThumb}>
        <div className="atbd-top-dropdwon-menu">
          <ul className="atbd-top-dropdwon__nav">
            
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <p>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3}></Badge>
                      </span>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <p>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3}></Badge>
                      </span>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <p>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3}></Badge>
                      </span>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <p>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3}></Badge>
                      </span>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link to="#">
                <figure className="atbd-top-dropdwon__content">
                  <img src={require('../../../static/img/avatar/NoPath.png')} alt="" />
                  <figcaption>
                    <Heading as="h5">
                      Software <span className="color-success">3 hrs ago</span>
                    </Heading>
                    <p>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3}></Badge>
                      </span>
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li></li>
            
        </ul>
        </div>
      </Scrollbars>
      <Link className="btn-seeAll" to="#">
        See all messages
      </Link>
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
