import React, { useState } from 'react';
import { ButtonStyledGroup, ButtonStyled } from './styled';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    type,
    shape,
    icon,
    size,
    outlined,
    ghost,
    transparented,
    raised,
    squared,
    color,
    social,
    load,
    ...rest
  } = props;
  const [state, setState] = useState({
    loading: false,
  });

  const enterLoading = () => {
    setState({ loading: true });
  };

  return (
    <ButtonStyled
      squared={squared}
      outlined={outlined}
      ghost={ghost}
      transparented={transparented}
      raised={raised}
      data={type}
      size={size}
      shape={shape}
      type={type}
      icon={icon}
      color={color}
      social={social}
      onClick={load && enterLoading}
      loading={state.loading}
      {...rest}
    >
      {props.children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  type: 'default',
};

Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  transparented: PropTypes.bool,
  raised: PropTypes.bool,
  squared: PropTypes.bool,
  social: PropTypes.bool,
  load: PropTypes.bool,
  ghost: PropTypes.bool,
};

const BtnGroup = props => {
  return <ButtonStyledGroup>{props.children}</ButtonStyledGroup>;
};

export { Button, BtnGroup };
