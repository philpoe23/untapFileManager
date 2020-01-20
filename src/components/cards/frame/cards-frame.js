import React, { useState } from 'react';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardWraper, CardTabWraper, CardTabBtnWraper } from './cards-frame-style';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../config/theme/customize-antd';

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

CardTabsBtnFrame.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  tabList: PropTypes.array.isRequired,
  contentList: PropTypes.object.isRequired,
};

const CardHeadLessFrame = props => {
  const { title, caption, size } = props;
  return (
    <CardWraper>
      <Card size={size} style={{ width: '100%' }}>
        <h4>{title}</h4>
        <p>{caption}</p>
        {props.children}
      </Card>
    </CardWraper>
  );
};
CardHeadLessFrame.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export { CardFreshFrame, CardTabsFrame, CardTabsBtnFrame, CardHeadLessFrame };
