import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import {Alert, IconAlert, OutLineAlert } from '../../components/alerts/alerts';

const Alerts = () => {
  return (
    <Fragment>
      <PageHeader title="Alerts" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Icon alerts" size="large" caption="Alert with nice Icon">              
              <IconAlert showIcon={true} message="Hello there! A simple success alert—check it out!" type="success" />
              <IconAlert showIcon={true} message="Hello there! A simple error alert—check it out!" type="error" />
              <IconAlert showIcon={true} message="Hello there! A simple warning alert—check it out!" type="warning" />
              <IconAlert showIcon={true} message="Hello there! A simple info alert—check it out!" type="info" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Icon alerts" size="large" caption="Alert with nice Icon">
              <OutLineAlert showIcon={true} message="Hello there! A simple success alert—check it out!" type="success" />
              <OutLineAlert showIcon={true} message="Hello there! A simple error alert—check it out!" type="error" />
              <OutLineAlert showIcon={true} message="Hello there! A simple warning alert—check it out!" type="warning" />
              <OutLineAlert showIcon={true} message="Hello there! A simple info alert—check it out!" type="info" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Default alerts" size="large" caption="Alert with contextual background color">
              <Alert message="Hello there! A simple alert—check with Primary color!" type="primary" />
              <Alert message="Hello there! A simple alert—check with Secondary color!" type="secondary" />
              <Alert message="Hello there! A simple success alert—check it out!" type="success" />
              <Alert message="Hello there! A simple error alert—check it out!" type="error" />
              <Alert message="Hello there! A simple warning alert—check it out!" type="warning" />
              <Alert message="Hello there! A simple info alert—check it out!" type="info" />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Description Alert" size="large" caption="Alert with a nice description">
              <Alert message="Hello there! A simple success alert—check it out!" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" type="success" />
              <Alert message="Hello there! A simple error alert—check it out!" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" type="error" />
              <Alert message="Hello there! A simple warning alert—check it out!" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" type="warning" />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Alerts;
