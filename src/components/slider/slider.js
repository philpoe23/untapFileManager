import React, { useState, Fragment } from 'react';
import { Slider, InputNumber, Icon, Row, Col } from 'antd';
import { IconWrapper } from './slider-style';
import PropTypes from 'prop-types';

const SliderWithInputInteger = props => {
  const [state, setState] = useState({
    inputValue: 1,
  });

  const onChange = value => {
    setState({
      inputValue: value,
    });
  };

  const { inputValue } = state;
  const { min, max } = props;
  return (
    <Fragment>
      <Row>
        <Col span={20}>
          <Slider {...min} {...max} onChange={onChange} value={typeof inputValue === 'number' ? inputValue : 0} />
        </Col>
        <Col span={4}>
          <InputNumber {...min} {...max} style={{ marginLeft: 16 }} value={inputValue} onChange={onChange} />
        </Col>
      </Row>
    </Fragment>
  );
};

const SliderWithInputDecimal = props => {
  const [state, setState] = useState({
    inputValue: 0,
  });
  const onChange = value => {
    if (isNaN(value)) {
      return;
    }
    setState({
      inputValue: value,
    });
  };
  const { inputValue } = state;
  const { min, max, step } = props;
  return (
    <Fragment>
      <Row>
        <Col span={20}>
          <Slider min={min} max={max} onChange={onChange} value={typeof inputValue === 'number' ? inputValue : 0} step={step} />
        </Col>
        <Col span={4}>
          <InputNumber min={min} max={max} style={{ marginLeft: 16 }} value={inputValue} onChange={onChange} step={step} />
        </Col>
      </Row>
    </Fragment>
  );
};

const SliderWithIcon = props => {
  const { min, max, beforeIcon, afterIcon } = props;
  const [state, setState] = useState({
    inputValue: 1,
    mini: min,
    maxi: max,
  });

  const handleChange = value => {
    setState({ ...state, value });
  };

  const { value, mini, maxi } = state;
  const mid = ((maxi - mini) / 2).toFixed(5);
  const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

  return (
    <Fragment>
      <IconWrapper>
        <Icon style={{ color: preColor }} type={beforeIcon} />
        <Slider min={mini} max={maxi} onChange={handleChange} value={value} />
        <Icon style={{ color: nextColor }} type={afterIcon} />
      </IconWrapper>
    </Fragment>
  );
};

SliderWithInputInteger.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

SliderWithInputDecimal.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

SliderWithIcon.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  beforeIcon: PropTypes.string,
  afterIcon: PropTypes.string,
};

export { SliderWithInputInteger, SliderWithInputDecimal, SliderWithIcon };
