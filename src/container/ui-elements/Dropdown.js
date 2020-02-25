import React from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Button, Icon } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { DropdownWithIcon } from '../../components/dropdown/dropdown';
import { content } from '../../config/dataService/button-content';
import { DropdownStyle } from './ui-elements-styled';
import { BtnDropdown } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Dropdown = () => {
  return (
    <DropdownStyle>
      <PageHeader title="Dropdown" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic Dropdown" caption="The simplest use of Steps">
              <DropdownWithIcon content={content} placement="bottomLeft">
                <NavLink to="#">hover me</NavLink>
              </DropdownWithIcon>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Placement" caption="The simplest use of Dropdown">
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
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Event menu " caption="The simplest use of Dropdown">
              <DropdownWithIcon action={['hover']} content={content} placement="bottomLeft">
                <Button>hover</Button>
              </DropdownWithIcon>
              <DropdownWithIcon action={['click']} content={content} placement="bottomCenter">
                <Button>click</Button>
              </DropdownWithIcon>
              <DropdownWithIcon action={['contextMenu']} content={content} placement="bottomRight">
                <Button>context</Button>
              </DropdownWithIcon>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="button menu " caption="The simplest use of Dropdown">
              <BtnDropdown placement="bottomLeft" type="primary" content={content} action={['click']}>
                Bottom Left Click
                <Icon type="down" />
              </BtnDropdown>

              <BtnDropdown placement="bottomRight" title="with title" content={content} type="secondary">
                Bottom Right hover
                <Icon type="down" />
              </BtnDropdown>
              <BtnDropdown placement="topLeft" content={content} type="danger">
                Top Left hover
                <Icon type="down" />
              </BtnDropdown>
              <BtnDropdown placement="topRight" content={content} type="success">
                Top Right hover
                <Icon type="down" />
              </BtnDropdown>
              <BtnDropdown placement="bottomLeft" size="small" content={content} type="error">
                Error
                <Icon type="down" />
              </BtnDropdown>
              <BtnDropdown placement="bottomLeft" size="small" content={content} type="warning">
                Warning
                <Icon type="down" />
              </BtnDropdown>
              <BtnDropdown placement="bottomLeft" size="small" content={content} type="info">
                Info
                <Icon type="down" />
              </BtnDropdown>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Dropdown;
