import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicDrawer, CustomPlacementDrawer, RenderDrawer, MultiLavelDrawer } from '../../components/drawer/drawer';

const Drawer = () => {
  return (
    <Fragment>
      <PageHeader title="Drawer" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Drawer">
              <BasicDrawer title="Basic Drawer" placement="right">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </BasicDrawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom placement" caption="The simplest use of Drawer">
              <CustomPlacementDrawer title="Basic Drawer">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </CustomPlacementDrawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Render in current dom" caption="The simplest use of Drawer">
              <RenderDrawer title="Basic Drawer">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </RenderDrawer>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Multi Label Drawer" caption="The simplest use of Drawer">
              <MultiLavelDrawer
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
              </MultiLavelDrawer>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Drawer;
