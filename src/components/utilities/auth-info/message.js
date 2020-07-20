import React from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

const MessageBox = () => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} props={props} />;
  };

  renderThumb.propTypes = {
    style: PropTypes.object,
  };

  const content = (
    <div className="atbd-top-dropdwon">
      <Heading className="atbd-top-dropdwon__title" as="h5">
        <span className="title-text">Messages</span>
        <Badge className="badge-success" count={3} />
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
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
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
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
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
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
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
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
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
                    <div>
                      <span className="atbd-top-dropdwonText">Lorem ipsum dolor amet cosec...</span>
                      <span>
                        <Badge className="badge-success" count={3} />
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <ul />
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
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]}>
          <Link to="#" className="head-example">
            <FeatherIcon icon="mail" size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
};

export default MessageBox;
