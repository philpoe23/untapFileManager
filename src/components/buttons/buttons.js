import React, { useState } from 'react';
import { ButtonStyledGroup, ButtonStyled, ButtonStyledOutline, ButtonStyledSquare, ButtonStyledSquareOutline, ButtonStyledSocial } from './styled';
import { PopupWithIcon } from '../../components/popup/popup';
import { DropdownWithIcon } from '../../components/dropdown/dropdown';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, shape, icon, size, click, ...reset } = props;
  return (
    <ButtonStyled {...reset} data={type} size={size} onClick={click} shape={shape} type={type} icon={icon}>
      {props.children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
};

const BtnLoading = props => {
  const [state, setState] = useState({
    loading: false,
  });

  const { type, shape, icon, size, event, ...reset } = props;
  const enterLoading = () => {
    setState({ loading: true });
  };

  return (
    <ButtonStyled {...reset} loading={event ? state.loading : true} onClick={event && enterLoading} size={size} shape={shape} type={type} icon={icon}>
      {props.children}
    </ButtonStyled>
  );
};

BtnLoading.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  event: PropTypes.bool,
};

const BtnOutline = props => {
  const { type, shape, size, ...reset } = props;
  return (
    <ButtonStyledOutline {...reset} size={size} shape={shape} type={type}>
      {props.children}
    </ButtonStyledOutline>
  );
};

BtnOutline.propTypes = {
  type: PropTypes.string.isRequired,
  shape: PropTypes.string,
  size: PropTypes.string,
};

const BtnSquare = props => {
  const { type, size, ...reset } = props;
  return (
    <ButtonStyledSquare {...reset} size={size} type={type}>
      {props.children}
    </ButtonStyledSquare>
  );
};
BtnSquare.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
};

const BtnSquareOutline = props => {
  const { type, size, ...reset } = props;
  return (
    <ButtonStyledSquareOutline {...reset} size={size} type={type}>
      {props.children}
    </ButtonStyledSquareOutline>
  );
};
BtnSquareOutline.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
};

const BtnSocial = props => {
  const { color, size, ...reset } = props;
  return (
    <ButtonStyledSocial {...reset} size={size} color={color}>
      {props.children}
    </ButtonStyledSocial>
  );
};
BtnSocial.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

const BtnGroup = props => {
  return <ButtonStyledGroup>{props.children}</ButtonStyledGroup>;
};

const BtnPopOver = props => {
  const { type, shape, icon, size, content, title, placement, action, ...reset } = props;
  return (
    <PopupWithIcon placement={placement} title={title} content={content} action={action}>
      <ButtonStyled {...reset} size={size} shape={shape} type={type} icon={icon}>
        {props.children}
      </ButtonStyled>
    </PopupWithIcon>
  );
};
BtnPopOver.propTypes = {
  type: PropTypes.string.isRequired,
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  content: PropTypes.object,
  title: PropTypes.string,
  placement: PropTypes.string,
  action: PropTypes.string,
};

const BtnDropdown = props => {
  const { type, shape, icon, size, content, title, placement, action, ...reset } = props;
  return (
    <DropdownWithIcon placement={placement} title={title} content={content} action={action}>
      <ButtonStyled {...reset} size={size} shape={shape} type={type} icon={icon}>
        {props.children}
      </ButtonStyled>
    </DropdownWithIcon>
  );
};
BtnDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  content: PropTypes.object,
  title: PropTypes.string,
  placement: PropTypes.string,
  action: PropTypes.array,
};

export { Button, BtnOutline, BtnSquare, BtnSquareOutline, BtnSocial, BtnGroup, BtnLoading, BtnPopOver, BtnDropdown };
