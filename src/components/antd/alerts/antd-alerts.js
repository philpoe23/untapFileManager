import React from 'react';
import { AlertStyled, AlertStyledIcon, AlertStyledOutLine } from './alerts-styled';
import PropTypes from 'prop-types';

const BasicAlert = props => {
  const { type, message, description, showIcon } = props;
  return <AlertStyled message={message} type={type} description={description} closable showIcon={showIcon && showIcon} />;
};
BasicAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
};
const IconAlert = props => {
  const { type, message, description, showIcon } = props;
  return <AlertStyledIcon message={message} type={type} description={description} closable showIcon={showIcon && showIcon} />;
};
IconAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
};
const OutLineAlert = props => {
  const { type, message, description, showIcon } = props;
  return <AlertStyledOutLine message={message} type={type} description={description} closable showIcon={showIcon && showIcon} />;
};
OutLineAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
};
export { BasicAlert, IconAlert, OutLineAlert };
