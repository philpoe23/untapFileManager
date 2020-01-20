import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Icon } from 'antd';
import { Main } from '../../styled';
import FeatherIcon from 'feather-icons-react';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';
import { BtnBasic, BtnOutline, BtnSquare, BtnSquareOutline, BtnSocial, BtnGroup } from '../../../components/button/antd/antd-buttons';

const Dashbord = props => {
  return (
    <Fragment>
      <PageHeader title="Button" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic Buttons" size="large" caption="Default Antd buttons style.">
              <BtnBasic type="primary">Primary</BtnBasic>
              <BtnBasic type="secondary">Secondary</BtnBasic>
              <BtnBasic type="danger">Danger</BtnBasic>
              <BtnBasic type="success">Success</BtnBasic>
              <BtnBasic type="error">Error</BtnBasic>
              <BtnBasic type="warning">Warning</BtnBasic>
              <BtnBasic type="default">Default</BtnBasic>
              <BtnBasic type="info">Info</BtnBasic>
              <BtnBasic type="link">Link</BtnBasic>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Basic Rounded Buttons" size="large" caption="Rounded Bootstrap buttons.">
              <BtnBasic shape="circle" type="primary">
                Primary
              </BtnBasic>
              <BtnBasic shape="circle" type="secondary">
                Secondary
              </BtnBasic>
              <BtnBasic shape="circle" type="danger">
                Danger
              </BtnBasic>
              <BtnBasic shape="circle" type="success">
                Success
              </BtnBasic>
              <BtnBasic shape="circle" type="error">
                Error
              </BtnBasic>
              <BtnBasic shape="circle" type="warning">
                Warning
              </BtnBasic>
              <BtnBasic shape="circle" type="default">
                Default
              </BtnBasic>
              <BtnBasic shape="circle" type="info">
                Info
              </BtnBasic>
              <BtnBasic shape="circle" type="link">
                Link
              </BtnBasic>
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
              <BtnBasic icon="smile" type="primary">
                Primary
              </BtnBasic>
              <BtnBasic icon="global" type="secondary">
                Secondary
              </BtnBasic>
              <BtnBasic icon="close" type="danger">
                Danger
              </BtnBasic>
              <BtnBasic icon="check" type="success">
                Success
              </BtnBasic>
              <BtnBasic icon="warning" type="warning">
                Warning
              </BtnBasic>
              <BtnBasic icon="info" type="info">
                Info
              </BtnBasic>
              <BtnBasic icon="link" type="link">
                Link
              </BtnBasic>
              <BtnBasic type="primary">
                <Icon type="smile" />
              </BtnBasic>
              <BtnBasic type="secondary">
                <Icon type="global" />
              </BtnBasic>
              <BtnBasic type="danger">
                <Icon type="close" />
              </BtnBasic>
              <BtnBasic type="success">
                <Icon type="check" />
              </BtnBasic>
              <BtnBasic type="warning">
                <Icon type="warning" />
              </BtnBasic>
              <BtnBasic type="info">
                <Icon type="info" />
              </BtnBasic>
              <BtnBasic type="link">
                <Icon type="link" />
              </BtnBasic>
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
                <BtnBasic size="small" type="primary">
                  Small
                </BtnBasic>
                <BtnBasic size="default" type="primary">
                  Medium
                </BtnBasic>
                <BtnBasic size="large" type="primary">
                  Large
                </BtnBasic>
              </Row>
              <Row>
                <BtnBasic icon="smile" size="small" type="primary">
                  Small
                </BtnBasic>
                <BtnBasic icon="smile" size="default" type="primary">
                  Medium
                </BtnBasic>
                <BtnBasic icon="smile" size="large" type="primary">
                  Large
                </BtnBasic>
              </Row>
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Button Group" size="large" caption="Fancy larger or smaller buttons.">
              <BtnGroup>
                <BtnBasic type="primary">Small</BtnBasic>
                <BtnBasic type="primary">Medium</BtnBasic>
                <BtnBasic type="primary">Large</BtnBasic>
              </BtnGroup>
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Dashbord;
