import React, { useState } from 'react';
import { ButtonStyledGroup, ButtonStyled } from './styled';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, shape, icon, size, outlined, squared, color, social, load, ...rest } = props;
  const [state, setState] = useState({
    loading: false,
  });
  const enterLoading = () => {
    setState({ loading: true });
  };

  return (
    <ButtonStyled
      squared={squared ? 1 : 0}
      outlined={outlined ? 1 : 0}
      data={type}
      size={size}
      shape={shape}
      type={type}
      icon={icon}
      color={color}
      social={social ? 1 : 0}
      onClick={load && enterLoading}
      loading={state.loading}
      {...rest}
    >
      {props.children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  squared: PropTypes.bool,
  social: PropTypes.bool,
  load: PropTypes.bool,
};

const BtnGroup = props => {
  return <ButtonStyledGroup>{props.children}</ButtonStyledGroup>;
};

export { Button, BtnGroup };
