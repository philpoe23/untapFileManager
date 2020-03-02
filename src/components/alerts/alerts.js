import React from 'react';
import { AlertStyled, AlertStyledIcon, AlertStyledOutLine } from './styled';
import PropTypes from 'prop-types';

const Alert = props => {
  const { type, message, description, showIcon, outlined } = props;

  return (
    <AlertStyled
      message={message}
      type={type}
      description={description}
      closable
      showIcon={showIcon && showIcon}
      outlined={outlined}
    />
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
  outlined: PropTypes.bool,
};

export default Alert;
