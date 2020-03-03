import React from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { DropdownWithIcon } from '../../components/dropdown/dropdown';
import { content } from '../../config/dataService/button-content';
import { DropdownStyle } from './ui-elements-styled';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Dropdown = () => {
  return (
    <DropdownStyle>
      <PageHeader title="Dropdown" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic Dropdown" caption="The simplest use of Steps">
              <DropdownWithIcon content={content} placement="bottomLeft">
                <NavLink to="#">hover me</NavLink>
              </DropdownWithIcon>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Placement" caption="The simplest use of Dropdown">
              <DropdownWithIcon content={content} placement="bottomLeft">
                <Button>bottomLeft</Button>
              </DropdownWithIcon>
              <DropdownWithIcon content={content} placement="bottomCenter">
                <Button>bottomCenter</Button>
              </DropdownWithIcon>
              <DropdownWithIcon content={content} placement="bottomRight">
                <Button>bottomRight</Button>
              </DropdownWithIcon>
              <br />
              <DropdownWithIcon content={content} placement="topLeft">
                <Button>topLeft</Button>
              </DropdownWithIcon>
              <DropdownWithIcon content={content} placement="topCenter">
                <Button>topCenter</Button>
              </DropdownWithIcon>
              <DropdownWithIcon content={content} placement="topRight">
                <Button>topRight</Button>
              </DropdownWithIcon>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Event menu " caption="The simplest use of Dropdown">
              <DropdownWithIcon action={['hover']} content={content} placement="bottomLeft">
                <Button>hover</Button>
              </DropdownWithIcon>
              <DropdownWithIcon action={['click']} content={content} placement="bottomCenter">
                <Button>click</Button>
              </DropdownWithIcon>
              <DropdownWithIcon action={['contextMenu']} content={content} placement="bottomRight">
                <Button>context</Button>
              </DropdownWithIcon>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="button menu " caption="The simplest use of Dropdown">
              <DropdownWithIcon placement="bottomLeft" content={content} action={['click']}>
                <Button type="primary">
                  Bottom Left Click
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>

              <DropdownWithIcon placement="bottomRight" title="with title" content={content}>
                <Button type="secondary">
                  Bottom Right hover
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>
              <DropdownWithIcon placement="topLeft" content={content}>
                <Button type="danger">
                  Top Left hover
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>
              <DropdownWithIcon placement="topRight" content={content}>
                <Button type="success">
                  Top Right hover
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>
              <DropdownWithIcon placement="bottomLeft" size="small" content={content}>
                <Button type="error">
                  Error
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>
              <DropdownWithIcon placement="bottomLeft" size="small" content={content}>
                <Button type="warning">
                  Warning
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>
              <DropdownWithIcon placement="bottomLeft" size="small" content={content}>
                <Button type="info">
                  Info
                  <Icon type="down" />
                </Button>
              </DropdownWithIcon>
            </Cards>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Dropdown;
