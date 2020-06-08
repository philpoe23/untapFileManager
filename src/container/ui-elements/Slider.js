import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Slider } from '../../components/slider/slider';

const Sliders = () => {
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

  const onChange = value => {
    console.log(value);
  };

  const onAfterChange = value => {
    console.log('onAfterChange: ', value);
  };

  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };

  return (
    <Fragment>
      <PageHeader ghost title="Sliders" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of slider">
              <Slider onChange={onChange} defaultValue={30}/>
              <Slider onChange={onChange} range defaultValues={[20, 50]} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="With Input" caption="The simplest use of slider">
              <h3>With integer</h3>
              <Slider input min={1} max={100} />
              <h3>With Decimal</h3>
              <Slider input min={0} max={1} step={0.01} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="with Icon" caption="The simplest use of slider">
              <Slider onChange={onChange} icon min={1} max={100} beforeIcon="frown-o" afterIcon="smile-o" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Range" caption="The simplest use of slider">
              <Slider range step={10} defaultValues={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Graduated slider" caption="The simplest use of slider">
              <div>
                <h4>included=true</h4>
                <Slider marks={marks} defaultValue={37} />
                <Slider range marks={marks} defaultValues={[26, 37]} />

                <h4>included=false</h4>
                <Slider marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <Slider marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <Slider marks={marks} step={null} defaultValue={37} />
              </div>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Graduated slider vertical" caption="The simplest use of slider">
              <div>
                <div style={style}>
                  <Slider vertical defaultValue={30} />
                </div>
                <div style={style}>
                  <Slider vertical range step={10} defaultValues={[20, 50]} />
                </div>
                <div style={style}>
                  <Slider vertical range marks={marks} defaultValues={[26, 37]} />
                </div>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Sliders;
