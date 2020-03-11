import React from 'react';
import { Content, DropdownStyle } from './dropdown-style';
import PropTypes from 'prop-types';

const Dropdown = props => {
  const { content, placement, title, action } = props;
  const content1 = <Content>{content}</Content>;
  return (
    <DropdownStyle
      placement={placement}
      title={title}
      overlay={content1}
      trigger={action !== undefined ? action : ['hover']}
    >
      {props.children}
    </DropdownStyle>
  );
};

Dropdown.propTypes = {
  placement: PropTypes.string.isRequired,
  title: PropTypes.string,
  action: PropTypes.array,
  content: PropTypes.object.isRequired,
};

export { Dropdown };
