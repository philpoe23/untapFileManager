import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main, AlertList } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Alert from '../../components/alerts/alerts';
import FeatherIcon from 'feather-icons-react';

const Alerts = () => {
  return (
    <Fragment>
      <PageHeader title="Alerts" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic" size="large">
              <AlertList>
                <Alert closable closeText="Close Now" message="Success Text" type="success" />
              </AlertList>
            </Cards>
            <Cards title="Closable" size="large">
              <AlertList>
                <Alert
                  message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                  type="warning"
                />
                <Alert
                  closable
                  message="Error Text"
                  description="Error Text Error Text Warning TextW Error Text Error Text Error TextError Text"
                  type="error"
                />
              </AlertList>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="More Types" size="large">
              <AlertList>
                <Alert message="Success Text" type="success" />
                <Alert message="Info Text" type="info" />
                <Alert message="Warning Text" type="warning" />
                <Alert message="Error Text" type="error" />
              </AlertList>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Icon alerts" size="large" caption="Alert with nice Icon">
              <Alert
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple success alert—check it out!</sapn>
                  </div>
                }
                type="success"
              />
              <Alert
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple error alert—check it out!</sapn>
                  </div>
                }
                type="error"
              />
              <Alert
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple warning alert—check it out!</sapn>
                  </div>
                }
                type="warning"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple info alert—check it out!</sapn>
                  </div>
                }
                type="info"
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Icon alerts" size="large" caption="Alert with nice Icon">
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple success alert—check it out!</sapn>
                  </div>
                }
                type="success"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple error alert—check it out!</sapn>
                  </div>
                }
                type="error"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple warning alert—check it out!</sapn>
                  </div>
                }
                type="warning"
              />
              <Alert
                outlined
                message={
                  <div>
                    <FeatherIcon icon="layers" size={14} />
                    <sapn>Hello there! A simple info alert—check it out!</sapn>
                  </div>
                }
                type="info"
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Default alerts" size="large" caption="Alert with contextual background color">
              <Alert message="Hello there! A simple success alert—check it out!" type="success" />
              <Alert message="Hello there! A simple error alert—check it out!" type="error" />
              <Alert message="Hello there! A simple warning alert—check it out!" type="warning" />
              <Alert message="Hello there! A simple info alert—check it out!" type="info" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Description Alert" size="large" caption="Alert with a nice description">
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
