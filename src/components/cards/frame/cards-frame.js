import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardFrame } from './style';
import PropTypes from 'prop-types';

const Cards = props => {
  const { title, more, size, headless, caption } = props;
  return (
    <Fragment>
      {!headless ? (
        <CardFrame
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
  caption: PropTypes.string,
};

export { Cards };
