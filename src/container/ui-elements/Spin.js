import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Spin, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { SpinerWraperStyle } from './ui-elements-styled';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const Spiner = () => {
  return (
    <Fragment>
      <PageHeader title="Spin" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Spin">
              <Spin />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Size" caption="The simplest use of Spin">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Inside a container" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin />
              </SpinerWraperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom Indicator" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin indicator={antIcon} />
              </SpinerWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Spiner;
