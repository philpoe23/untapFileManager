import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardFrame } from './style';
import PropTypes from 'prop-types';

const Cards = props => {
  const { title, more, size, headless, caption, tabList, contentList, tabs, isbutton } = props;
  const [key, setKey] = useState(tabList && tabList[0]['key']);
  const button = isbutton ? 1 : 0;

  const onTabChange = key => {
    setKey(key);
  };
  return (
    <Fragment>
      {!headless ? (
        <CardFrame
          size={size}
          title={title}
          isbutton={button}
          extra={
            more && (
              <NavLink to="#">
                <FeatherIcon icon="more-horizontal" />
              </NavLink>
            )
          }
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {!tabs ? props.children : contentList[key]}
        </CardFrame>
      ) : (
        <CardFrame size={size} style={{ width: '100%' }}>
          <h4>{title}</h4>
          <p>{caption}</p>
          {props.children}
        </CardFrame>
      )}
    </Fragment>
  );
};

Cards.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  more: PropTypes.bool,
  headless: PropTypes.bool,
  isButton: PropTypes.bool,
  tabs: PropTypes.bool,
  caption: PropTypes.string,
  tabList: PropTypes.array,
  contentList: PropTypes.object,
};

export { Cards };
