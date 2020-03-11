import React from 'react';
import { Content, PopoverStyle } from './style';
import PropTypes from 'prop-types';
import './style.css';

const Popover = props => {
  const { content, placement, title, action } = props;
  const content1 = <Content>{content}</Content>;
  return (
    <PopoverStyle
      placement={placement}
      title={title}
      content={content1}
      trigger={action !== undefined ? action : 'hover'}
    >
      {props.children}
    </PopoverStyle>
  );
};

Popover.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
  content: PropTypes.object,
};

export { Popover };
