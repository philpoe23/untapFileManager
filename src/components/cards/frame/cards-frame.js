import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { CardFrame } from './style';
import PropTypes from 'prop-types';
import Heading from '../../heading/heading';
import { Dropdown } from '../../dropdown/dropdown';

const Cards = props => {
  const { title, more, moreText, size, headless, caption, isbutton, bodyStyle, headStyle, border, bodypadding } = props;
  return (
    <Fragment>
      {!headless ? (
        <CardFrame
          size={size}
          title={title}
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          bordered={border}
          bodypadding={bodypadding && bodypadding}
          extra={
            <Fragment>
              {more && (
                <Dropdown content={more} placement="bottomCenter">
                  <NavLink to="#">{!moreText ? <FeatherIcon icon="more-horizontal" /> : 'More'}</NavLink>
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
        <CardFrame
          bodypadding={bodypadding && bodypadding}
          bodyStyle={bodyStyle && bodyStyle}
          size={size}
          style={{ width: '100%' }}
          bordered={border}
        >
          {title && <Heading as="h4">{title}</Heading>}
          {caption && <p>{caption}</p>}
          {props.children}
        </CardFrame>
      )}
    </Fragment>
  );
};

Cards.defaultProps = {
  border: false,
};

Cards.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  more: PropTypes.object,
  bodyStyle: PropTypes.object,
  headStyle: PropTypes.object,
  isbutton: PropTypes.object,
  headless: PropTypes.bool,
  border: PropTypes.bool,
  caption: PropTypes.string,
  bodypadding: PropTypes.string,
  moreText: PropTypes.bool,
};

export { Cards };
