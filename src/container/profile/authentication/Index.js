import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './overview/style';
import Heading from '../../../components/heading/heading';

const AuthLayout = WraperContent => {
  return () => {
    return (
      <Row>
        <Col md={8}>
          <Aside>
            <img src={require('../../../static/img/auth/topShape.png')} alt="" className="topShape" />
            <img src={require('../../../static/img/auth/bottomShape.png')} alt="" className="bottomShape" />
            <Content>
              <img src={require('../../../static/img/logo.png')} alt="" />
              <br />
              <br />
              <Heading as="h1">
                Bootstrap 4 React <br />
                Web Application
              </Heading>
              <img src={require('../../../static/img/auth/Illustration.png')} alt="" />
            </Content>
          </Aside>
        </Col>

        <Col md={16}>
          <WraperContent />
        </Col>
      </Row>
    );
  };
};

export default AuthLayout;
