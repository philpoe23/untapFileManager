import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './overview/style';
import Heading from '../../../components/heading/heading';

const AuthLayout = WraperContent => {
  return () => {
    return (
      <Row>
        <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
          <Aside>
            <div className="auth-side-content">
              <img
                src={require('../../../static/img/sidebar_graphic.png')}
                alt=""
                className="bottomShape"
                style={{ width: '100%', height: '70%', zIndex: -1 }}
              />
              <Content>
                <img
                  style={{ width: '150px' }}
                  src={require('../../../static/img/UntapStrategyFinal-Full.png')}
                  alt=""
                />
                <br />
                <br />
                <Heading as="h1">Untap Strategy</Heading>
              </Content>
            </div>
          </Aside>
        </Col>

        <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
          <WraperContent />
        </Col>
      </Row>
    );
  };
};

export default AuthLayout;
