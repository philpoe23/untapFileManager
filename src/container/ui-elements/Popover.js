import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { DropdownStyle } from './ui-elements-styled';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom';
import { Popover } from '../../components/popup/popup';

const Popovers = () => {
  return (
    <DropdownStyle>
      <PageHeader title="Popovers" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic Popover" caption="The simplest use of Popover">
              <Popover placement="bottomLeft">
                <NavLink to="#">hover me </NavLink>
              </Popover>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Placement" caption="The simplest use of Popover">
              <Popover placement="bottomLeft">
                <Button type="primary">bottomLeft</Button>
              </Popover>
              <Popover placement="bottom">
                <Button type="primary">bottomCenter</Button>
              </Popover>
              <Popover placement="bottomRight">
                <Button type="primary">bottomRight</Button>
              </Popover>
              <br />
              <Popover placement="topLeft">
                <Button type="primary">topLeft</Button>
              </Popover>
              <Popover placement="top">
                <Button type="primary">topCenter</Button>
              </Popover>
              <Popover placement="topRight">
                <Button type="primary">topRight</Button>
              </Popover>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Event menu " caption="The simplest use of Popover">
              <Popover action="hover" placement="bottomLeft">
                <Button type="primary">hover</Button>
              </Popover>
              <Popover action="click" placement="bottom">
                <Button type="primary">click</Button>
              </Popover>
              <Popover action="contextMenu" placement="bottomRight">
                <Button type="primary">context</Button>
              </Popover>
            </Cards>
          </Col>
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Popovers;
