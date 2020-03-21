import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './style';
import PropTypes from 'prop-types';

const Title = props => {
  const { label } = props;

  return label === 1 ? (
    <H1>{props.children}</H1>
  ) : label === 2 ? (
    <H2>{props.children}</H2>
  ) : label === 3 ? (
    <H3>{props.children}</H3>
  ) : label === 4 ? (
    <H4>{props.children}</H4>
  ) : label === 5 ? (
    <H5>{props.children}</H5>
  ) : (
    <H6>{props.children}</H6>
  );
};

Title.defaultProps = {
  label: 1,
};
Title.propTypes = {
  label: PropTypes.number,
};
export default Title;
