import React from 'react';
import { Row, Col } from 'antd';
import { EllipsisOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { DropdownStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Button } from '../../components/buttons/buttons';

const Dropdowns = () => {
  return (
    <DropdownStyle>
      <PageHeader ghost title="Dropdown" />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic Dropdown" caption="The simplest use of Steps">
              <Dropdown placement="bottomLeft">
                <Link to="#">Hover me</Link>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Placement" caption="The simplest use of Dropdown">
              <Dropdown placement="bottomLeft">
                <Button>Bottom Left</Button>
              </Dropdown>
              <Dropdown placement="bottomCenter">
                <Button>Bottom Center</Button>
              </Dropdown>
              <Dropdown placement="bottomRight">
                <Button>Bottom Right</Button>
              </Dropdown>
              <br />
              <Dropdown placement="topLeft">
                <Button>Top Left</Button>
              </Dropdown>
              <Dropdown placement="topCenter">
                <Button>Top Center</Button>
              </Dropdown>
              <Dropdown placement="topRight">
                <Button>Top Right</Button>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Event menu " caption="The simplest use of Dropdown">
              <Dropdown action={['hover']} placement="bottomLeft">
                <Link to="#">hover me </Link>
              </Dropdown>
              <Dropdown action={['click']} placement="bottomCenter">
                <Link to="#">click </Link>
              </Dropdown>
              <Dropdown action={['contextMenu']} placement="bottomRight">
                <Link to="#">context</Link>
              </Dropdown>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Button with dropdown menu" caption="The simplest use of Dropdown">
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
