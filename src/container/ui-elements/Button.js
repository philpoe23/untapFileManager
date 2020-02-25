import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { CardHeadLessFrame } from '../../components/cards/frame/cards-frame';
import { Button, BtnOutline, BtnSquare, BtnSquareOutline, BtnSocial, BtnGroup, BtnLoading, BtnPopOver, BtnDropdown } from '../../components/buttons/buttons';
import { content } from '../../config/dataService/button-content';

const Buttons = () => {
  return (
    <Fragment>
      <PageHeader title="Button" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic Buttons" size="large" caption="Default Antd buttons style.">
              <Button type="primary">Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="danger">Danger</Button>
              <Button type="success">Success</Button>
              <Button type="error">Error</Button>
              <Button type="warning">Warning</Button>
              <Button type="default">Default</Button>
              <Button type="info">Info</Button>
              <Button type="link">Link</Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Basic Rounded Buttons" size="large" caption="Rounded Bootstrap buttons.">
              <Button shape="circle" type="primary">
                Primary
              </Button>
              <Button shape="circle" type="secondary">
                Secondary
              </Button>
              <Button shape="circle" type="danger">
                Danger
              </Button>
              <Button shape="circle" type="success">
                Success
              </Button>
              <Button shape="circle" type="error">
                Error
              </Button>
              <Button shape="circle" type="warning">
                Warning
              </Button>
              <Button shape="circle" type="default">
                Default
              </Button>
              <Button shape="circle" type="info">
                Info
              </Button>
              <Button shape="circle" type="link">
                Link
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Outline Buttons" size="large" caption="Buttons without background color.">
              <BtnOutline type="primary">Primary</BtnOutline>
              <BtnOutline type="secondary">Secondary</BtnOutline>
              <BtnOutline type="danger">Danger</BtnOutline>
              <BtnOutline type="success">Success</BtnOutline>
              <BtnOutline type="error">Error</BtnOutline>
              <BtnOutline type="warning">Warning</BtnOutline>
              <BtnOutline type="default">Default</BtnOutline>
              <BtnOutline type="info">Info</BtnOutline>
              <BtnOutline type="link">Link</BtnOutline>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Outline Rounded Buttons" size="large" caption="Rounded Buttons without background color.">
              <BtnOutline shape="circle" type="primary">
                Primary
              </BtnOutline>
              <BtnOutline shape="circle" type="secondary">
                Secondary
              </BtnOutline>
              <BtnOutline shape="circle" type="danger">
                Danger
              </BtnOutline>
              <BtnOutline shape="circle" type="success">
                Success
              </BtnOutline>
              <BtnOutline shape="circle" type="error">
                Error
              </BtnOutline>
              <BtnOutline shape="circle" type="warning">
                Warning
              </BtnOutline>
              <BtnOutline shape="circle" type="default">
                Default
              </BtnOutline>
              <BtnOutline shape="circle" type="info">
                Info
              </BtnOutline>
              <BtnOutline shape="circle" type="link">
                Link
              </BtnOutline>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Square Buttons" size="large" caption="Buttons without border radius.">
              <BtnSquare type="primary">Primary</BtnSquare>
              <BtnSquare type="secondary">Secondary</BtnSquare>
              <BtnSquare type="danger">Danger</BtnSquare>
              <BtnSquare type="success">Success</BtnSquare>
              <BtnSquare type="error">Error</BtnSquare>
              <BtnSquare type="warning">Warning</BtnSquare>
              <BtnSquare type="default">Default</BtnSquare>
              <BtnSquare type="info">Info</BtnSquare>
              <BtnSquare type="link">Link</BtnSquare>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Square Outline Buttons" size="large" caption="Buttons without border radius.">
              <BtnSquareOutline type="primary">Primary</BtnSquareOutline>
              <BtnSquareOutline type="secondary">Secondary</BtnSquareOutline>
              <BtnSquareOutline type="danger">Danger</BtnSquareOutline>
              <BtnSquareOutline type="success">Success</BtnSquareOutline>
              <BtnSquareOutline type="error">Error</BtnSquareOutline>
              <BtnSquareOutline type="warning">Warning</BtnSquareOutline>
              <BtnSquareOutline type="default">Default</BtnSquareOutline>
              <BtnSquareOutline type="info">Info</BtnSquareOutline>
              <BtnSquareOutline type="link">Link</BtnSquareOutline>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Icon Buttons" size="large" caption="Default Antd buttons style with icon.">
              <Button icon="smile" type="primary">
                Primary
              </Button>
              <Button icon="global" type="secondary">
                Secondary
              </Button>
              <Button icon="close" type="danger">
                Danger
              </Button>
              <Button icon="check" type="success">
                Success
              </Button>
              <Button icon="warning" type="warning">
                Warning
              </Button>
              <Button icon="info" type="info">
                Info
              </Button>
              <Button icon="link" type="link">
                Link
              </Button>
              <Button type="primary">
                <Icon type="smile" />
              </Button>
              <Button type="secondary">
                <Icon type="global" />
              </Button>
              <Button type="danger">
                <Icon type="close" />
              </Button>
              <Button type="success">
                <Icon type="check" />
              </Button>
              <Button type="warning">
                <Icon type="warning" />
              </Button>
              <Button type="info">
                <Icon type="info" />
              </Button>
              <Button type="link">
                <Icon type="link" />
              </Button>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Icon Buttons" size="large" caption="Default Antd buttons style with icon.">
              <BtnSocial color="#2366B8">
                <FeatherIcon size={16} icon="facebook" />
                Facebook
              </BtnSocial>
              <BtnSocial color="#00ABE4">
                <FeatherIcon size={16} icon="twitter" />
                Twitter
              </BtnSocial>
              <BtnSocial color="#9D2E98">
                <FeatherIcon size={16} icon="instagram" />
                Instagram
              </BtnSocial>
              <BtnSocial color="#E32212">
                <FeatherIcon size={16} icon="youtube" />
                Youtube
              </BtnSocial>
              <BtnSocial color="#007CBC">
                <FeatherIcon size={16} icon="linkedin" />
                Linkedin
              </BtnSocial>
              <BtnSocial color="#ED553B">
                <FeatherIcon size={16} icon="rss" />
                Feed
              </BtnSocial>
              <BtnSocial color="#2366B8">
                <FeatherIcon size={16} icon="facebook" />
              </BtnSocial>
              <BtnSocial color="#00ABE4">
                <FeatherIcon size={16} icon="twitter" />
              </BtnSocial>
              <BtnSocial color="#9D2E98">
                <FeatherIcon size={16} icon="instagram" />
              </BtnSocial>
              <BtnSocial color="#E32212">
                <FeatherIcon size={16} icon="youtube" />
              </BtnSocial>
              <BtnSocial color="#007CBC">
                <FeatherIcon size={16} icon="linkedin" />
              </BtnSocial>
              <BtnSocial color="#ED553B">
                <FeatherIcon size={16} icon="rss" />
              </BtnSocial>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Button Sizes" size="large" caption="Fancy larger or smaller buttons.">
              <Row>
                <Button size="small" type="primary">
                  Small
                </Button>
                <Button size="default" type="primary">
                  Medium
                </Button>
                <Button size="large" type="primary">
                  Large
                </Button>
              </Row>
              <Row>
                <Button icon="smile" size="small" type="primary">
                  Small
                </Button>
                <Button icon="smile" size="default" type="primary">
                  Medium
                </Button>
                <Button icon="smile" size="large" type="primary">
                  Large
                </Button>
              </Row>
              <p>Loading button</p>
              <Row>
                <BtnLoading size="large" type="primary">
                  Loading
                </BtnLoading>
                <BtnLoading size="large" type="primary" event={true}>
                  Click
                </BtnLoading>
              </Row>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Button Group" size="large" caption="Fancy larger or smaller buttons.">
              <Row>
                <BtnGroup>
                  <Button size="small" type="primary">
                    Left
                  </Button>
                  <Button size="small" type="primary">
                    Middle
                  </Button>
                  <Button size="small" type="primary">
                    Right
                  </Button>
                </BtnGroup>
              </Row>

              <Row>
                <BtnGroup>
                  <Button type="secondary">Left</Button>
                  <Button type="secondary">Middle</Button>
                  <Button type="secondary">Right</Button>
                </BtnGroup>
              </Row>
              <Row>
                <BtnGroup>
                  <BtnOutline size="large" type="primary">
                    Left
                  </BtnOutline>
                  <BtnOutline size="large" type="primary">
                    Middle
                  </BtnOutline>
                  <BtnOutline size="large" type="primary">
                    Right
                  </BtnOutline>
                </BtnGroup>
              </Row>
              <p>Button toolbar</p>
              <BtnGroup>
                <Button type="primary">1</Button>
                <Button type="primary">2</Button>
                <Button type="primary">3</Button>
                <Button type="primary">4</Button>
                <Button type="primary">5</Button>
              </BtnGroup>
              <BtnGroup>
                <Button type="primary">6</Button>
                <Button type="primary">7</Button>
                <Button type="primary">8</Button>
              </BtnGroup>
              <BtnGroup>
                <Button type="primary">9</Button>
              </BtnGroup>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Button Popover" size="large" caption="Dropdowns styles with buttons.">
              <BtnPopOver placement="bottomLeft" type="primary" content={content} action="click">
                Primary
                <Icon type="down" />
              </BtnPopOver>

              <BtnPopOver placement="bottomRight" title="with title" content={content} type="secondary">
                Secondary
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="topLeft" content={content} type="danger">
                Danger
                <Icon type="down" />
              </BtnPopOver>
              <BtnPopOver placement="topRight" content={content} type="success">
                Success
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
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Button Dropdown" size="large" caption="Dropdowns styles with buttons.">
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
    </Fragment>
  );
};

export default Buttons;
