import React, { Fragment } from 'react';
import { Content, PopoverStyle } from './style';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Popover = props => {
  const { content, placement, title, action } = props;
  const content1 = <Content>{content}</Content>;

  return (
    <PopoverStyle placement={placement} title={title} content={content1} trigger={action}>
      {props.children}
    </PopoverStyle>
  );
};

Popover.defaultPropTypes = {
  action: 'hover',
  placement: 'bottomCenter',
  content: (
    <Fragment>
      <Link to="#">
        <FeatherIcon size={16} icon="check" />
        <span>Btn Dropdown one</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={16} icon="check" />
        <span>Btn Dropdown two</span>
      </Link>
      <Link to="#">
        <FeatherIcon size={16} icon="check" />
        <span>Btn Dropdown three</span>
      </Link>
    </Fragment>
  ),
};

Popover.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
  content: PropTypes.object,
};

export { Popover };
