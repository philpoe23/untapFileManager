import React, { useState } from 'react';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardWraper, CardTabWraper, CardTabBtnWraper } from './cards-frame-style';
import PropTypes from 'prop-types';

const CardFreshFrame = props => {
  const { title, more, size } = props;
  return (
    <CardWraper>
      <Card
        size={size}
        title={title}
        extra={
          more && (
            <NavLink to="#">
              <FeatherIcon icon="more-horizontal" />
            </NavLink>
          )
        }
        style={{ width: '100%' }}
      >
        {props.children}
      </Card>
    </CardWraper>
  );
};
CardFreshFrame.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
};

const CardTabsFrame = props => {
  const { title, more, size, tabList, contentList } = props;
  const [key, setKey] = useState(tabList[0]['key']);

  const onTabChange = (key, type) => {
    setKey(key);
  };

  return (
    <CardWraper>
      <CardTabWraper>
        <Card
          style={{ width: '100%' }}
          title={title}
          size={size}
          tabBarExtraContent={
            more && (
              <NavLink to="#">
                <FeatherIcon icon="more-horizontal" />
              </NavLink>
            )
          }
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[key]}
        </Card>
      </CardTabWraper>
    </CardWraper>
  );
};

CardTabsFrame.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  tabList: PropTypes.array.isRequired,
  contentList: PropTypes.object.isRequired,
};

const CardTabsBtnFrame = props => {
  const { title, more, size, tabList, contentList } = props;
  const [key, setKey] = useState(tabList[0]['key']);

  const onTabChange = (key, type) => {
    setKey(key);
  };

  return (
    <CardWraper>
      <CardTabBtnWraper>
        <Card
          style={{ width: '100%' }}
          title={title}
          size={size}
          tabBarExtraContent={
            more && (
              <NavLink to="#">
                <FeatherIcon icon="more-horizontal" />
              </NavLink>
            )
          }
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[key]}
        </Card>
      </CardTabBtnWraper>
    </CardWraper>
  );
};

CardTabsBtnFrame.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  tabList: PropTypes.array.isRequired,
  contentList: PropTypes.object.isRequired,
};

export { CardFreshFrame, CardTabsFrame, CardTabsBtnFrame };
