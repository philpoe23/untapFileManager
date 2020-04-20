import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardFrame } from './style';
import PropTypes from 'prop-types';
import Heading from '../../heading/heading';
import { Dropdown } from '../../dropdown/dropdown';

const Cards = props => {
  const { title, more, size, headless, caption, isbutton, bodyStyle, headStyle } = props;
  return (
    <Fragment>
      {!headless ? (
        <CardFrame
          size={size}
          title={title}
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          extra={
            <Fragment>
              {more && (
                <Dropdown content={more} placement="bottomCenter">
                  <NavLink to="#">
                    <FeatherIcon icon="more-horizontal" />
                  </NavLink>
                </Dropdown>
              )}

              {isbutton && isbutton}
            </Fragment>
          }
          style={{ width: '100%' }}
        >
          {props.children}
        </CardFrame>
      ) : (
        <CardFrame bodyStyle={bodyStyle && bodyStyle} size={size} style={{ width: '100%' }}>
          <Heading as="h4">{title}</Heading>
          <p>{caption}</p>
          {props.children}
        </CardFrame>
      )}
    </Fragment>
  );
};

Cards.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  more: PropTypes.object,
  bodyStyle: PropTypes.object,
  headStyle: PropTypes.object,
  isbutton: PropTypes.object,
  headless: PropTypes.bool,
  caption: PropTypes.string,
};

export { Cards };
