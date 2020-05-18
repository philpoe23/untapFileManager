import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon } from 'antd';
import { Main , ButtonsGroupWrapper , BlockButtonsWrapper } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';
import { Dropdown } from '../../components/dropdown/dropdown';
import {SmileOutlined} from '@ant-design/icons';

const Buttons = () => {
  return (
    <Cards headless>
      <PageHeader title="Button" />
      <Main className="button-example">
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic" size="large">
              <Button size="default" type="primary">Primary</Button>
              <Button size="default" type="secondary">Secondary</Button>
              <Button size="default" type="success">Success</Button>
              <Button size="default" type="info">Info</Button>
              <Button size="default" type="warning">Warning</Button>
              <Button size="default" type="danger">Danger</Button>
              <Button size="default" type="link">Link</Button>
              <Button size="default" type="dark">Dark</Button>
              <Button size="default" type="light">Light</Button>
              <Button size="default" type="white">White</Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Outline" size="large">
              <Button size="default" outlined type="primary">
                Primary
              </Button>
              <Button size="default" outlined type="secondary">
                Secondary
              </Button>
              <Button size="default" outlined type="success">
                Success
              </Button>
              <Button size="default" outlined type="info">
                Info
              </Button>
              <Button size="default" outlined type="warning">
                Warning
              </Button>
              <Button size="default" outlined type="danger">
                Danger
              </Button>
              <Button size="default" outlined type="dark">
                Dark
              </Button>
              <Button size="default" outlined type="light">
                Light
              </Button>
              <Button size="default" outlined type="dashed">
                Dashed
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Light Color" size="large">
              <Button size="default" transparented type="primary">
                Primary
              </Button>
              <Button size="default" transparented type="secondary">
                Secondary
              </Button>
              <Button size="default" transparented type="success">
                Success
              </Button>
              <Button size="default" transparented type="info">
                Info
              </Button>
              <Button size="default" transparented type="warning">
                Warning
              </Button>
              <Button size="default" transparented type="danger">
                Danger
              </Button>
              <Button size="default" transparented type="dark">
                Dark
              </Button>
              <Button size="default" transparented type="light">
                Light
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Raised" size="large">
              <Button size="default" raised type="primary">
                Primary
              </Button>
              <Button size="default" raised type="secondary">
                Secondary
              </Button>
              <Button size="default" raised type="success">
                Success
              </Button>
              <Button size="default" raised type="info">
                Info
              </Button>
              <Button size="default" raised type="warning">
                Warning
              </Button>
              <Button size="default" raised type="danger">
                Danger
              </Button>
              <Button size="default" raised type="dark">
                Dark
              </Button>
              <Button size="default" raised type="white">
                White
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Rounded" size="large">
              <Button size="default" shape="circle" type="primary">
                Primary
              </Button>
              <Button size="default" shape="circle" type="secondary">
                Secondary
              </Button>
              <Button size="default" shape="circle" type="success">
                Success
              </Button>
              <Button size="default" shape="circle" type="info">
                Info
              </Button>
              <Button size="default" shape="circle" type="warning">
                Warning
              </Button>
              <Button size="default" shape="circle" type="danger">
                Danger
              </Button>
              <Button size="default" shape="circle" type="dark">
                Dark
              </Button>
              <Button size="default" shape="circle" type="light">
                Light
              </Button>
              <Button size="default" shape="circle" type="white">
                White
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Rounded Outline" size="large">
              <Button size="default" outlined shape="circle" type="primary">
                Primary
              </Button>
              <Button size="default" outlined shape="circle" type="secondary">
                Secondary
              </Button>
              <Button size="default" outlined shape="circle" type="success">
                Success
              </Button>
              <Button size="default" outlined shape="circle" type="info">
                Info
              </Button>
              <Button size="default" outlined shape="circle" type="warning">
                Warning
              </Button>
              <Button size="default" outlined shape="circle" type="danger">
                Danger
              </Button>
              <Button size="default" outlined shape="circle" type="dark">
                Dark
              </Button>
              <Button size="default" outlined shape="circle" type="light">
                Light
              </Button>
              <Button size="default" outlined shape="circle" type="dashed">
                Dashed
              </Button>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards headless title="Square Buttons" size="large" caption="Buttons without border radius.">
              <Button squared type="primary">
                Primary
              </Button>
              <Button squared type="secondary">
                Secondary
              </Button>
              <Button squared type="success">
                Success
              </Button>
              <Button squared type="error">
                Error
              </Button>
              <Button squared type="warning">
                Warning
              </Button>
              <Button squared type="default">
                Default
              </Button>
              <Button squared type="info">
                Info
              </Button>
              <Button squared type="link">
                Link
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Square Outline Buttons" size="large" caption="Buttons without border radius.">
              <Button squared outlined type="primary">
                Primary
              </Button>
              <Button squared outlined type="secondary">
                Secondary
              </Button>
              <Button squared outlined type="success">
                Success
              </Button>
              <Button squared outlined type="error">
                Error
              </Button>
              <Button squared outlined type="warning">
                Warning
              </Button>
              <Button squared outlined type="default">
                Default
              </Button>
              <Button squared outlined type="info">
                Info
              </Button>
              <Button squared outlined type="link">
                Link
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Icon Buttons" size="large" caption="Default Antd buttons style with icon.">
              <Button size="default" type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" outlined type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" type="secondary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                </span>
                Secondary
              </Button>
              <Button size="default" type="primary">
                <SmileOutlined/>
              </Button>
              <Button size="default" type="secondary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                </span>
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Icon Buttons" size="large" caption="Default Antd buttons style with icon.">
              <Button social color="#2366B8">
                <FeatherIcon size={16} icon="facebook" />
                Facebook
              </Button>
              <Button social color="#00ABE4">
                <FeatherIcon size={16} icon="twitter" />
                Twitter
              </Button>
              <Button social color="#9D2E98">
                <FeatherIcon size={16} icon="instagram" />
                Instagram
              </Button>
              <Button social color="#E32212">
                <FeatherIcon size={16} icon="youtube" />
                Youtube
              </Button>
              <Button social color="#007CBC">
                <FeatherIcon size={16} icon="linkedin" />
                Linkedin
              </Button>
              <Button social color="#ED553B">
                <FeatherIcon size={16} icon="rss" />
                Feed
              </Button>
              <Button social color="#2366B8">
                <FeatherIcon size={16} icon="facebook" />
              </Button>
              <Button social color="#00ABE4">
                <FeatherIcon size={16} icon="twitter" />
              </Button>
              <Button social color="#9D2E98">
                <FeatherIcon size={16} icon="instagram" />
              </Button>
              <Button social color="#E32212">
                <FeatherIcon size={16} icon="youtube" />
              </Button>
              <Button social color="#007CBC">
                <FeatherIcon size={16} icon="linkedin" />
              </Button>
              <Button social color="#ED553B">
                <FeatherIcon size={16} icon="rss" />
              </Button>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Button Sizes" size="large" caption="Fancy larger or smaller buttons.">
              <Row>
                <Button size="large" type="primary">
                  Large Button
                </Button>
                <Button size="default" type="secondary">
                  Default
                </Button>
                <Button size="small" type="success">
                  Small
                </Button>
                <Button size="extra-small" type="info">
                  Extra Small
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
                <Button load size="large" type="primary">
                  Loading
                </Button>
                <Button load size="large" type="primary">
                  Click
                </Button>
              </Row>
            </Cards>
          </Col>
          
          <Col md={12}>
            <Cards title="Group Button" size="large">
              <ButtonsGroupWrapper>
                <div className="button-group-single">
                  <h4>Basic</h4>
                  <Row>
                    <BtnGroup>
                      <Button size="small" type="primary">
                        Today
                      </Button>
                      <Button size="small" outlined type="light">
                        Week
                      </Button>
                      <Button size="small" outlined type="light">
                        Month
                      </Button>
                      <Button size="small" outlined type="light">
                        Year
                      </Button>
                    </BtnGroup>
                    <BtnGroup>
                      <Button size="small" outlined type="light">
                        Cancel
                      </Button>
                      <Button size="small" outlined type="light">
                        Ok
                      </Button>
                    </BtnGroup>
                    <BtnGroup>
                      <Button size="small" type="light">
                        Left
                      </Button>
                      <Button size="small" type="light">
                        Middle
                      </Button>
                      <Button size="small" type="light">
                        Right
                      </Button>
                    </BtnGroup>
                  </Row>
                </div>
                  
                <div className="button-group-single">
                  <h4>With Icon</h4>
                  <Row>
                    <BtnGroup>
                      <Button size="small" type="light">
                        Go Back
                      </Button>
                      <Button size="small" type="light">
                        Go Forward
                      </Button>
                    </BtnGroup>
                  </Row>
              </div>
              </ButtonsGroupWrapper>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Button Popover" size="large" caption="Dropdowns styles with buttons.">
              <Popover placement="bottomLeft" action="click">
                <Button type="primary">
                  Primary
                  <Icon type="down" />
                </Button>
              </Popover>
              <Popover placement="bottomRight" title="with title">
                <Button type="secondary">
                  Secondary
                  <Icon type="down" />
                </Button>
              </Popover>

              <Popover placement="topLeft">
                <Button type="error">
                  Error
                  <Icon type="down" />
                </Button>
              </Popover>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Multiple Buttons" size="large">
              <Dropdown placement="bottomLeft" action={['click']}>
                <Button size="default" type="primary">
                  Primary
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown placement="bottomRight" title="with title">
                <Button size="default" type="secondary">
                  Secondary
                  <Icon type="down" />
                </Button>
              </Dropdown>

              <Dropdown placement="topLeft">
                <Button size="default" type="error">
                  Error
                  <Icon type="down" />
                </Button>
              </Dropdown>
            </Cards>
          </Col>
          
          <Col md={12}>
            <Cards title="BlocK" size="large">
              <BlockButtonsWrapper>
                <Button size="large" type="primary" block>
                  Large Button
                </Button>
                <Button size="default" type="secondary" block>
                  Default
                </Button>
                <Button size="small" type="success" block>
                  Small
                </Button>
                <Button size="extra-small" type="info" block>
                  Extra Small
                </Button>
              </BlockButtonsWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Cards>
  );
};

export default Buttons;
