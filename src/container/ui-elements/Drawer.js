import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Drawer } from '../../components/drawer/drawer';

const Drawers = () => {
  return (
    <Fragment>
      <PageHeader title="Drawer" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Drawer">
              <Drawer title="Basic Drawer" placement="right">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom placement" caption="The simplest use of Drawer">
              <Drawer customPlacement title="Basic Drawer">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Render in current dom" caption="The simplest use of Drawer">
              <div
                style={{
                  height: 200,
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid #ebedf0',
                  borderRadius: 2,
                  padding: 48,
                  textAlign: 'center',
                  background: '#fafafa',
                }}
              >
                <Drawer render title="Basic Drawer">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Multi Label Drawer" caption="The simplest use of Drawer">
              <Drawer
                title="Basic Drawer"
                childTitle="Lavel Two"
                childDrawer={
                  <Fragment>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Fragment>
                }
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Drawers;
