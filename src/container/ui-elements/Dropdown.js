import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { content } from '../../config/dataService/button-content';
import { DropdownStyle } from './ui-elements-styled';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Dropdowns = () => {
  return (
    <DropdownStyle>
      <PageHeader title="Dropdown" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic Dropdown" caption="The simplest use of Steps">
              <Dropdown content={content} placement="bottomLeft">
                <NavLink to="#">hover me</NavLink>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Placement" caption="The simplest use of Dropdown">
              <Dropdown content={content} placement="bottomLeft">
                <Button type="primary">bottomLeft</Button>
              </Dropdown>
              <Dropdown content={content} placement="bottomCenter">
                <Button type="primary">bottomCenter</Button>
              </Dropdown>
              <Dropdown content={content} placement="bottomRight">
                <Button type="primary">bottomRight</Button>
              </Dropdown>
              <br />
              <Dropdown content={content} placement="topLeft">
                <Button type="primary">topLeft</Button>
              </Dropdown>
              <Dropdown content={content} placement="topCenter">
                <Button type="primary">topCenter</Button>
              </Dropdown>
              <Dropdown content={content} placement="topRight">
                <Button type="primary">topRight</Button>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Event menu " caption="The simplest use of Dropdown">
              <Dropdown action={['hover']} content={content} placement="bottomLeft">
                <Button type="primary">hover</Button>
              </Dropdown>
              <Dropdown action={['click']} content={content} placement="bottomCenter">
                <Button type="primary">click</Button>
              </Dropdown>
              <Dropdown action={['contextMenu']} content={content} placement="bottomRight">
                <Button type="primary">context</Button>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="button menu " caption="The simplest use of Dropdown">
              <Dropdown placement="bottomLeft" content={content} action={['click']}>
                <Button type="primary">
                  Bottom Left Click
                  <Icon type="down" />
                </Button>
              </Dropdown>

              <Dropdown placement="bottomRight" title="with title" content={content}>
                <Button type="secondary">
                  Bottom Right hover
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="topLeft" content={content}>
                <Button type="danger">
                  Top Left hover
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="topRight" content={content}>
                <Button type="success">
                  Top Right hover
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomLeft" size="small" content={content}>
                <Button type="error">
                  Error
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomLeft" size="small" content={content}>
                <Button type="warning">
                  Warning
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomLeft" size="small" content={content}>
                <Button type="info">
                  Info
                  <Icon type="down" />
                </Button>
              </Dropdown>
            </Cards>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Dropdowns;
