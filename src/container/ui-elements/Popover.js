import React from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { content } from '../../config/dataService/button-content';
import { DropdownStyle } from './ui-elements-styled';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { PopupWithIcon } from '../../components/popup/popup';

const Popover = () => {
  return (
    <DropdownStyle>
      <PageHeader title="Popovers" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic Popover" caption="The simplest use of Popover">
              <PopupWithIcon content={content} placement="bottomLeft">
                <NavLink to="#">hover me</NavLink>
              </PopupWithIcon>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Placement" caption="The simplest use of Popover">
              <PopupWithIcon content={content} placement="bottomLeft">
                <Button>bottomLeft</Button>
              </PopupWithIcon>
              <PopupWithIcon content={content} placement="bottom">
                <Button>bottomCenter</Button>
              </PopupWithIcon>
              <PopupWithIcon content={content} placement="bottomRight">
                <Button>bottomRight</Button>
              </PopupWithIcon>
              <br />
              <PopupWithIcon content={content} placement="topLeft">
                <Button>topLeft</Button>
              </PopupWithIcon>
              <PopupWithIcon content={content} placement="top">
                <Button>topCenter</Button>
              </PopupWithIcon>
              <PopupWithIcon content={content} placement="topRight">
                <Button>topRight</Button>
              </PopupWithIcon>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Event menu " caption="The simplest use of Popover">
              <PopupWithIcon action="hover" content={content} placement="bottomLeft">
                <Button>hover</Button>
              </PopupWithIcon>
              <PopupWithIcon action="click" content={content} placement="bottom">
                <Button>click</Button>
              </PopupWithIcon>
              <PopupWithIcon action="contextMenu" content={content} placement="bottomRight">
                <Button>context</Button>
              </PopupWithIcon>
            </CardHeadLessFrame>
          </Col>
          {/* <Col md={12}>
            <CardHeadLessFrame title="button menu " caption="The simplest use of Popover">
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
            </CardHeadLessFrame>
          </Col> */}
        </Row>
      </Main>
    </DropdownStyle>
  );
};

export default Popover;
