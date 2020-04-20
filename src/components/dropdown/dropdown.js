import React, { Fragment } from 'react';
import { Content, DropdownStyle } from './dropdown-style';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Dropdown = props => {
  const { content, placement, title, action } = props;
  return (
    <DropdownStyle placement={placement} title={title} overlay={<Content>{content}</Content>} trigger={action}>
      {props.children}
    </DropdownStyle>
  );
};
const content = (
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
);
Dropdown.defaultProps = {
  action: ['hover'],
  placement: 'bottomCenter',
  content: content,
};
Dropdown.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.array,
  content: PropTypes.object,
};

export { Dropdown };
