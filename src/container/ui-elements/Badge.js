import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Icon, Badge } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BadgeWraperStyle } from './ui-elements-styled';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Badges = () => {
  return (
    <Fragment>
      <PageHeader title="Badge" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of badge">
              <BadgeWraperStyle>
                <Badge count={5}>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={0} showZero>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                  <NavLink to="#" className="head-example" />
                </Badge>
              </BadgeWraperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Standalone" caption="The simplest use of badge">
              <BadgeWraperStyle>
                <Badge count={25}>
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge
                  count={4}
                  style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                >
                  <NavLink to="#" className="head-example" />
                </Badge>
                <Badge count={109} style={{ backgroundColor: '#52c41a' }}>
                  <NavLink to="#" className="head-example" />
                </Badge>
              </BadgeWraperStyle>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Overflow Count" caption="The simplest use of badge">
              <BadgeWraperStyle>
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
              </BadgeWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Badges;
