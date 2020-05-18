import React from 'react';
import { Style } from './styled';
import PropTypes from 'prop-types';

const Alert = props => {
  const { type, message, description, showIcon, outlined, closable } = props;

  return (
    <Style
      message={message}
      type={type}
      description={description}
      closable={closable}
      showIcon={showIcon && showIcon}
      outlined={outlined}
    />
  );
};

Alert.defaultProps = {
  type: 'success',
  message: 'Hello there! A simple success alert—check it out!',
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
  outlined: PropTypes.bool,
  closable: PropTypes.bool,
};

export default Alert;
