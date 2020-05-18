import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon } from 'antd';
import { Main } from '../styled';
import FeatherIcon from 'feather-icons-react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import { Popover } from '../../components/popup/popup';
import { Dropdown } from '../../components/dropdown/dropdown';

const Buttons = () => {
  return (
    <Cards headless>
      <PageHeader title="Button" />
      <Main>
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
              <Button size="default" lightColored type="primary">
                Primary
              </Button>
              <Button size="default" lightColored type="secondary">
                Secondary
              </Button>
              <Button size="default" lightColored type="success">
                Success
              </Button>
              <Button size="default" lightColored type="info">
                Info
              </Button>
              <Button size="default" lightColored type="warning">
                Warning
              </Button>
              <Button size="default" lightColored type="danger">
                Danger
              </Button>
              <Button size="default" lightColored type="dark">
                Dark
              </Button>
              <Button size="default" lightColored type="light">
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
              <Button icon="smile" type="primary">
                Primary
              </Button>
              <Button icon="global" type="secondary">
                Secondary
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
              <Row>
                <BtnGroup>
                  <Button size="small" type="primary">
                    Today
                  </Button>
                  <Button size="small" type="primary">
                    Week
                  </Button>
                  <Button size="small" type="primary">
                    Month
                  </Button>
                  <Button size="small" type="primary">
                    Year
                  </Button>
                </BtnGroup>
                <BtnGroup>
                  <Button size="small" type="primary">
                    Cancel
                  </Button>
                  <Button size="small" type="primary">
                    Ok
                  </Button>
                </BtnGroup>
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
                  <Button outlined size="large" type="primary">
                    Left
                  </Button>
                  <Button outlined size="large" type="primary">
                    Middle
                  </Button>
                  <Button outlined size="large" type="primary">
                    Right
                  </Button>
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
            </Cards>
          </Col>
        </Row>
      </Main>
    </Cards>
  );
};

export default Buttons;
