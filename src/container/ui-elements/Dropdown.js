import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { EllipsisOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { DropdownStyle } from './ui-elements-styled';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Dropdowns = () => {
  return (
    <DropdownStyle>
      <PageHeader ghost title="Dropdown" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic Dropdown" caption="The simplest use of Steps">
              <Dropdown placement="bottomLeft">
                <NavLink to="#">hover me</NavLink>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Placement" caption="The simplest use of Dropdown">
              <Dropdown placement="bottomLeft">
                <Button>bottomLeft</Button>
              </Dropdown>
              <Dropdown placement="bottomCenter">
                <Button>bottomCenter</Button>
              </Dropdown>
              <Dropdown placement="bottomRight">
                <Button>bottomRight</Button>
              </Dropdown>
              <br />
              <Dropdown placement="topLeft">
                <Button>topLeft</Button>
              </Dropdown>
              <Dropdown placement="topCenter">
                <Button>topCenter</Button>
              </Dropdown>
              <Dropdown placement="topRight">
                <Button>topRight</Button>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Event menu " caption="The simplest use of Dropdown">
              <Dropdown action={['hover']} placement="bottomLeft">
                <NavLink to="#">hover me </NavLink>
              </Dropdown>
              <Dropdown action={['click']} placement="bottomCenter">
                <NavLink to="#">click </NavLink>
              </Dropdown>
              <Dropdown action={['contextMenu']} placement="bottomRight">
                <NavLink to="#">context</NavLink>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="button menu " caption="The simplest use of Dropdown">
              <Dropdown placement="bottomLeft" action={['click']}>
                <Button>
                  Bottom Left Click
                  <EllipsisOutlined />
                </Button>
              </Dropdown>

              <Dropdown placement="bottomRight" title="with title">
                <Button>
                  Bottom Right hover
                  <UserOutlined />
                </Button>
              </Dropdown>
              <Dropdown placement="topLeft">
                <Button>
                  Top Left hover
                  <EllipsisOutlined />
                </Button>
              </Dropdown>
              <Dropdown placement="topRight">
                <Button>
                  Top Right hover
                  <EllipsisOutlined />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomLeft" size="small">
                <Button>
                  Error
                  <EllipsisOutlined />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomLeft" size="small">
                <Button>
                  Warning
                  <EllipsisOutlined />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomLeft" size="small">
                <Button>
                  Info
                  <DownOutlined />
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
