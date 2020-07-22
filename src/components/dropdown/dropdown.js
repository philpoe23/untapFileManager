/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Content, DropdownStyle } from './dropdown-style';

const Dropdown = props => {
  const { content, placement, title, action, children } = props;

  return (
    <DropdownStyle placement={placement} title={title} overlay={<Content>{content}</Content>} trigger={action}>
      {children}
    </DropdownStyle>
  );
};

const content = (
  <>
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
  </>
);

Dropdown.defaultProps = {
  action: ['hover'],
  placement: 'bottomCenter',
  content,
};

Dropdown.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.array,
  content: PropTypes.node,
  children: PropTypes.node,
};

export { Dropdown };
