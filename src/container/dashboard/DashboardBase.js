import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import Palette from '../../components/color-palette/palette';

const Dashbord = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Theme Configuration" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless title="Theame Colors" size="large">
              <Row gutter={15}>
                <Col md={2}>
                  <Palette colorCode="#5F63F2">Primary</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#FF69A5">Secondary</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#20C997">Success</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#2C99FF">Info</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#FA8B0C">Warning</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#FF4D4F">Error</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#272B41">Dark</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#5A5F7D">Gray</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#9299B8">Light</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#ADB4D2">Extra Light</Palette>
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Hover Colors" size="large">
              <Row gutter={15}>
                <Col md={2}>
                  <Palette colorCode="#4347D9">Primary</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#E34A87">Secondary</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#0CAB7C">Success</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#0D79DF">Info</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#D47407">Warning</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#E30D0F">Error</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#131623">Dark</Palette>
                </Col>
                <Col md={2}>
                  <Palette colorCode="#363A51">Gray</Palette>
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Gradient Colors" size="large">
              <Row gutter={15}></Row>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Border Colors" size="large">
              <Row gutter={15}></Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Dashbord;
