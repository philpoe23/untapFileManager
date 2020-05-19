import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Badge, Switch } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BadgeWraperStyle, BadgeStandAloneStyle, BadgeOverflowStyle } from './ui-elements-styled';
import { NavLink, Link } from 'react-router-dom';
import { ClockCircleOutlined, NotificationOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { BtnGroup, Button } from '../../components/buttons/buttons';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const Badges = () => {
  const [state, setState] = useState({
    count: 5,
    show: true,
  });

  const increase = () => {
    const count = state.count + 1;
    setState({ ...state, count });
  };

  const decline = () => {
    let count = state.count - 1;
    if (count < 0) {
      count = 0;
    }
    setState({ ...state, count });
  };

  const onChange = show => {
    setState({ ...state, show });
  };

  return (
    <Fragment>
      <PageHeader ghost title="Badge" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic">
              <BadgeWraperStyle>
                <Badge count={5}>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={0} showZero>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                  <NavLink to="#" className="head-example" />
                </Badge>
              </BadgeWraperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Standalone">
              <BadgeWraperStyle>
                <BadgeStandAloneStyle>
                  <Badge count={25}></Badge>
                  <Badge
                    count={4}
                    style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                  ></Badge>
                  <Badge count={109} style={{ backgroundColor: '#52c41a' }}></Badge>
                </BadgeStandAloneStyle>
              </BadgeWraperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Overflow Count">
              <BadgeWraperStyle>
                <BadgeOverflowStyle>
                  <Badge count={99}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={100}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={99} overflowCount={10}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                  <Badge count={1000} overflowCount={999}>
                    <NavLink to="#" className="head-example" />
                  </Badge>
                </BadgeOverflowStyle>
              </BadgeWraperStyle>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Red badge">
              <BadgeWraperStyle>
                <Badge dot>
                  <NotificationOutlined />
                </Badge>
                <Badge count={0} dot>
                  <NotificationOutlined />
                </Badge>
                <Badge dot>
                  <Link to="#">Link something</Link>
                </Badge>
              </BadgeWraperStyle>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Clickable">
              <BadgeWraperStyle>
                <Link to="#">
                  <Badge count={5}>
                    <span className="head-example" />
                  </Badge>
                </Link>
              </BadgeWraperStyle>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards title="Dynamic">
              <BadgeWraperStyle>
                <div>
                  <Badge count={state.count}>
                    <Link to="#" className="head-example" />
                  </Badge>
                  <BtnGroup>
                    <Button onClick={decline}>
                      <MinusOutlined />
                    </Button>
                    <Button onClick={increase}>
                      <PlusOutlined />
                    </Button>
                  </BtnGroup>
                </div>
                <div style={{ marginTop: 10 }}>
                  <Badge dot={state.show}>
                    <Link to="#" className="head-example" />
                  </Badge>
                  <Switch onChange={onChange} checked={state.show} />
                </div>
              </BadgeWraperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Status">
              <BadgeWraperStyle>
                <div>
                  {colors.map(color => (
                    <Badge key={color} color={color} />
                  ))}
                </div>
                <div>
                  {colors.map(color => (
                    <div key={color}>
                      <Badge color={color} text={color} />
                    </div>
                  ))}
                </div>
              </BadgeWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Badges;
