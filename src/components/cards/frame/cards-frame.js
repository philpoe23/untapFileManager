import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardFrame } from './style';
import PropTypes from 'prop-types';
import Heading from '../../heading/heading';
import { Dropdown } from '../../dropdown/dropdown';

const Cards = props => {
  const { title, more, size, headless, caption, isbutton } = props;
  return (
    <Fragment>
      {!headless ? (
        <CardFrame
          size={size}
          title={title}
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
        <CardFrame size={size} style={{ width: '100%' }}>
          <Heading as="h4">{title}</Heading>
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
  more: PropTypes.object,
  isbutton: PropTypes.object,
  headless: PropTypes.bool,
  caption: PropTypes.string,
};

export { Cards };
