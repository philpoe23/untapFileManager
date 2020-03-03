import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Alert from '../../components/alerts/alerts';

const Alerts = () => {
  return (
    <Fragment>
      <PageHeader title="Alerts" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Icon alerts" size="large" caption="Alert with nice Icon">
              <Alert showIcon message="Hello there! A simple success alert—check it out!" type="success" />
              <Alert showIcon message="Hello there! A simple error alert—check it out!" type="error" />
              <Alert showIcon message="Hello there! A simple warning alert—check it out!" type="warning" />
              <Alert showIcon message="Hello there! A simple info alert—check it out!" type="info" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Icon alerts" size="large" caption="Alert with nice Icon">
              <Alert outlined showIcon message="Hello there! A simple success alert—check it out!" type="success" />
              <Alert outlined showIcon message="Hello there! A simple error alert—check it out!" type="error" />
              <Alert outlined showIcon message="Hello there! A simple warning alert—check it out!" type="warning" />
              <Alert outlined showIcon message="Hello there! A simple info alert—check it out!" type="info" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Default alerts" size="large" caption="Alert with contextual background color">
              <Alert message="Hello there! A simple success alert—check it out!" type="success" />
              <Alert message="Hello there! A simple error alert—check it out!" type="error" />
              <Alert message="Hello there! A simple warning alert—check it out!" type="warning" />
              <Alert message="Hello there! A simple info alert—check it out!" type="info" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Description Alert" size="large" caption="Alert with a nice description">
              <Alert
                message="Hello there! A simple success alert—check it out!"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                type="success"
              />
              <Alert
                message="Hello there! A simple error alert—check it out!"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                type="error"
              />
              <Alert
                message="Hello there! A simple warning alert—check it out!"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                type="warning"
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Alerts;
