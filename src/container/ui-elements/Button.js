import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon } from 'antd';
import { Main , ButtonsGroupWrapper , BlockButtonsWrapper } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';
import { Dropdown } from '../../components/dropdown/dropdown';
import { DownOutlined , LeftOutlined , RightOutlined } from '@ant-design/icons';

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
            <Cards title="Icon" size="large">
              <Button size="default" type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" transparented type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" outlined type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" outlined type="light">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" type="light">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" raised type="white">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <div class="icon-buttons">
                <Button size="default" type="primary">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" type="primary">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" outlined type="light">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" outlined type="light">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
              </div>
            </Cards>
          </Col>
          
          <Col md={12}>
            <Cards title="Rounded with Icon" size="large">
              <Button size="default" shape="circle" type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" transparented type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" outlined type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" outlined type="light">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" type="light">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" raised type="white">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <div class="icon-buttons">
                <Button size="default" shape="round" type="primary">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" outlined shape="round" type="primary">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" outlined shape="round" type="light">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" shape="round" type="light">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
              </div>
            </Cards>
          </Col>
          
          <Col md={12}>
            <Cards title="Size" size="large">
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
            </Cards>
          </Col>
      
          <Col md={12}>
            <Cards title="Disabled" size="large">
              <Row>
                <Button size="default" type="primary">Primary</Button>
                <Button size="default" type="primary" disabled>Primary(Disabled)</Button>
              </Row>
              <Row>
                <Button size="default" outlined type="light">Default</Button>
                <Button size="default" outlined type="light" disabled>Default(Disabled)</Button>
              </Row>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Multiple Buttons" size="large">
              
              <Button size="default" type="primary">
                Primary
              </Button>
            
              <Button size="default" type="secondary">
                Secondary
              </Button>

              <Dropdown placement="topLeft">
                <Button size="default" outlined type="light">
                  Actions
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Cards>
          </Col>
          
          <Col md={12}>
            <Cards title="Loading" size="large">
              <Button size="default" shape="circle" type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" transparented type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" outlined type="primary">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" outlined type="light">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" type="light">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <Button size="default" shape="circle" raised type="white">
                <span className="button-icon">
                  <img src={require('../../static/img/icon-primary-default.svg')} alt=""/>
                </span>
                Default
              </Button>
              <div class="icon-buttons">
                <Button size="default" shape="round" type="primary">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" outlined shape="round" type="primary">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" outlined shape="round" type="light">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
                <Button size="default" shape="round" type="light">
                  <span className="button-icon">
                    <img src={require('../../static/img/icon-white-default.svg')} alt=""/>
                  </span>
                </Button>
              </div>
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
                      <LeftOutlined />
                        Go Back
                      </Button>
                      <Button size="small" type="light">
                        Go Forward
                        <RightOutlined />
                      </Button>
                    </BtnGroup>
                  </Row>
              </div>
              </ButtonsGroupWrapper>
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
