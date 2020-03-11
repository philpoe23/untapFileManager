import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { content } from '../../config/dataService/button-content';
import { DropdownStyle } from './ui-elements-styled';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Popover } from '../../components/popup/popup';

const Popovers = () => {
  return (
    <DropdownStyle>
      <PageHeader title="Popovers" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic Popover" caption="The simplest use of Popover">
              <Popover content={content} placement="bottomLeft">
                <NavLink to="#">hover me </NavLink>
              </Popover>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Placement" caption="The simplest use of Popover">
              <Popover content={content} placement="bottomLeft">
                <Button type="primary">bottomLeft</Button>
              </Popover>
              <Popover content={content} placement="bottom">
                <Button type="primary">bottomCenter</Button>
              </Popover>
              <Popover content={content} placement="bottomRight">
                <Button type="primary">bottomRight</Button>
              </Popover>
              <br />
              <Popover content={content} placement="topLeft">
                <Button type="primary">topLeft</Button>
              </Popover>
              <Popover content={content} placement="top">
                <Button type="primary">topCenter</Button>
              </Popover>
              <Popover content={content} placement="topRight">
                <Button type="primary">topRight</Button>
              </Popover>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Event menu " caption="The simplest use of Popover">
              <Popover action="hover" content={content} placement="bottomLeft">
                <Button type="primary">hover</Button>
              </Popover>
              <Popover action="click" content={content} placement="bottom">
                <Button type="primary">click</Button>
              </Popover>
              <Popover action="contextMenu" content={content} placement="bottomRight">
                <Button type="primary">context</Button>
              </Popover>
            </Cards>
          </Col>
          {/* <Col md={12}>
            <Cards headless title="button menu " caption="The simplest use of Popover">
              <BtnPopOver placement="bottomLeft" type="primary" content={content} action={'click'}>
                Bottom Left Click
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="bottomRight" title="with title" content={content} type="secondary">
                Bottom Right hover
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="topLeft" content={content} type="danger">
                Top Left hover
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="topRight" content={content} type="success">
                Top Right hover
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="bottomLeft" size="small" content={content} type="error">
                Error
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="bottomLeft" size="small" content={content} type="warning">
                Warning
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="bottomLeft" size="small" content={content} type="info">
                Info
                <Icon type="down" />
              </BtnPopOver>
            </Cards>
          </Col> */}
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Popovers;
