import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Radio } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Radios = () => {
  return (
    <Fragment>
      <PageHeader title="Radio" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Radio">
              <Radio>Radio</Radio>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Radio Group" caption="The simplest use of Radio">
              <Radio.Group>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Radio Style" caption="The simplest use of Radio">
              <div>
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
              <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b" disabled>
                    Shanghai
                  </Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
              <div style={{ marginTop: 16 }}>
                <Radio.Group disabled defaultValue="a">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Radio Size" caption="The simplest use of Radio">
              <div>
                <Radio.Group defaultValue="a" size="large">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
              <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
              <div style={{ marginTop: 16 }}>
                <Radio.Group defaultValue="a" size="small">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Radios;
