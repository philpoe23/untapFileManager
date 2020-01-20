import React from 'react';
import { ButtonStyledGroup, ButtonStyled, ButtonStyledOutline, ButtonStyledSquare, ButtonStyledSquareOutline, ButtonStyledSocial } from './button-styled';

const BtnBasic = props => {
  const { type, shape, icon, size } = props;
  return (
    <ButtonStyled size={size} shape={shape} type={type} icon={icon}>
      {props.children}
    </ButtonStyled>
  );
};

const BtnOutline = props => {
  const { type, shape, size } = props;
  return (
    <ButtonStyledOutline size={size} shape={shape} type={type}>
      {props.children}
    </ButtonStyledOutline>
  );
};

const BtnSquare = props => {
  const { type, size } = props;
  return (
    <ButtonStyledSquare size={size} type={type}>
      {props.children}
    </ButtonStyledSquare>
  );
};

const BtnSquareOutline = props => {
  const { type, size } = props;
  return (
    <ButtonStyledSquareOutline size={size} type={type}>
      {props.children}
    </ButtonStyledSquareOutline>
  );
};

const BtnSocial = props => {
  const { color, size } = props;
  return (
    <ButtonStyledSocial size={size} color={color}>
      {props.children}
    </ButtonStyledSocial>
  );
};

const BtnGroup = props => {
  return <ButtonStyledGroup>{props.children}</ButtonStyledGroup>;
};

export { BtnBasic, BtnOutline, BtnSquare, BtnSquareOutline, BtnSocial, BtnGroup };
