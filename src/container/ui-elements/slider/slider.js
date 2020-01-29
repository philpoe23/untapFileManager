import React, { Fragment, useState } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Slider, InputNumber, Icon } from 'antd';
import { Main, IconWrapper } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';

const Sliders = props => {
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };
  const [state, setState] = useState({
    inputValue: 1,
    inputDecimal: 0,
    value: 0,
    min: 0,
    max: 50,
  });

  const onChange = value => {
    setState({
      ...state,
      inputValue: value,
    });
  };

  const onChangeDecimal = value => {
    if (isNaN(value)) {
      return;
    }
    setState({
      ...state,
      inputDecimal: value,
    });
  };

  const handleChange = value => {
    setState({ ...state, value });
  };

  const onAfterChange = value => {
    console.log('onAfterChange: ', value);
  };

  const { inputValue, inputDecimal, value, min, max } = state;
  const mid = ((max - min) / 2).toFixed(5);
  const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };
  return (
    <Fragment>
      <PageHeader title="Sliders" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of slider">
              <Slider defaultValue={30} />
              <Slider range defaultValue={[20, 50]} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="With Input" caption="The simplest use of slider">
              <Row>
                <Col span={20}>
                  <Slider min={1} max={20} onChange={onChange} value={typeof inputValue === 'number' ? inputValue : 0} />
                </Col>
                <Col span={4}>
                  <InputNumber min={1} max={20} style={{ marginLeft: 16 }} value={inputValue} onChange={onChange} />
                </Col>
              </Row>
              <Row>
                <Col span={20}>
                  <Slider min={0} max={1} onChange={onChangeDecimal} value={typeof inputDecimal === 'number' ? inputDecimal : 0} step={0.01} />
                </Col>
                <Col span={4}>
                  <InputNumber min={0} max={1} style={{ marginLeft: 16 }} step={0.01} value={inputDecimal} onChange={onChangeDecimal} />
                </Col>
              </Row>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="with Icon" caption="The simplest use of slider">
              <IconWrapper>
                <Icon style={{ color: preColor }} type="frown-o" />
                <Slider min={min} max={max} onChange={handleChange} value={value} />
                <Icon style={{ color: nextColor }} type="smile-o" />
              </IconWrapper>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Range" caption="The simplest use of slider">
              <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Graduated slider" caption="The simplest use of slider">
              <div>
                <h4>included=true</h4>
                <Slider marks={marks} defaultValue={37} />
                <Slider range marks={marks} defaultValue={[26, 37]} />

                <h4>included=false</h4>
                <Slider marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <Slider marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <Slider marks={marks} step={null} defaultValue={37} />
              </div>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Graduated slider vertical" caption="The simplest use of slider">
              <div>
                <div style={style}>
                  <Slider vertical defaultValue={30} />
                </div>
                <div style={style}>
                  <Slider vertical range step={10} defaultValue={[20, 50]} />
                </div>
                <div style={style}>
                  <Slider vertical range marks={marks} defaultValue={[26, 37]} />
                </div>
              </div>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Sliders;
