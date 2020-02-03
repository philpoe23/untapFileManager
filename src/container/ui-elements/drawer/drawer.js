import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { BasicDrawer, CustomPlacementDrawer, RenderDrawer, MultiLavelDrawer } from '../../../components/antd/drawer/drawer';

const Drawer = props => {
  return (
    <Fragment>
      <PageHeader title="Drawer" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Drawer">
              <BasicDrawer title="Basic Drawer" placement="right">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </BasicDrawer>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Custom placement" caption="The simplest use of Drawer">
              <CustomPlacementDrawer title="Basic Drawer">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </CustomPlacementDrawer>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Render in current dom" caption="The simplest use of Drawer">
              <RenderDrawer title="Basic Drawer">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </RenderDrawer>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Multi Label Drawer" caption="The simplest use of Drawer">
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
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Drawer;
