import React, { useState } from 'react';
import { InputNumber, Icon, Row, Col } from 'antd';
import { IconWrapper, SliderStyle } from './style';
import PropTypes from 'prop-types';

const Slider = props => {
  const {
    defaultValue,
    range,
    min,
    max,
    step,
    input,
    icon,
    beforeIcon,
    afterIcon,
    marks,
    vertical,
    defaultValues,
    onAfterChange,
    onChange,
  } = props;

  const [state, setState] = useState({
    inputValue: 1,
    mini: min,
    maxi: max,
  });

  const onChanges = value => {
    if (isNaN(value)) {
      return;
    }

    setState({
      ...state,
      inputValue: value,
    });
    onChange && onChange(value);
  };

  const handleChange = value => {
    setState({ ...state, value });
    onChange && onChange(value);
  };

  const { inputValue, value, mini, maxi } = state;
  const mid = ((maxi - mini) / 2).toFixed(5);
  const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

  const onAfterChanges = value => {
    onAfterChange && onAfterChange(value);
  };

  return input ? (
    <Row>
      <Col span={20}>
        <SliderStyle
          min={min}
          max={max}
          onChange={onChanges}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={step}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={min}
          max={max}
          style={{ marginLeft: 16 }}
          value={inputValue}
          onChange={onChanges}
          step={step}
        />
      </Col>
    </Row>
  ) : icon ? (
    <IconWrapper>
      <Icon style={{ color: preColor }} type={beforeIcon} />
      <SliderStyle min={mini} max={maxi} onChange={handleChange} value={value} />
      <Icon style={{ color: nextColor }} type={afterIcon} />
    </IconWrapper>
  ) : (
    <SliderStyle
      marks={marks}
      defaultValue={defaultValue ? defaultValue : defaultValues}
      range={range}
      step={step}
      vertical={vertical}
      onAfterChange={onAfterChanges}
      onChange={onChange}
      max={max}
      min={min}
    />
  );
};

Slider.propTypes = {
  defaultValue: PropTypes.number,
  defaultValues: PropTypes.array,
  range: PropTypes.bool,
  step: PropTypes.number,
  input: PropTypes.bool,
  icon: PropTypes.bool,
  marks: PropTypes.object,
  vertical: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  beforeIcon: PropTypes.string,
  afterIcon: PropTypes.string,
  onAfterChange: PropTypes.func,
  onChange: PropTypes.func,
};

export { Slider };
