import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Spin, Icon } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { SpinerWraperStyle } from '../ui-elements-styled';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const Spiner = props => {
  return (
    <Fragment>
      <PageHeader title="Spin" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Spin">
              <Spin />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Size" caption="The simplest use of Spin">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Inside a container" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin />
              </SpinerWraperStyle>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Custom Indicator" caption="The simplest use of Spin">
              <SpinerWraperStyle>
                <Spin indicator={antIcon} />
              </SpinerWraperStyle>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Spiner;
