import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Badge } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BadgeWraperStyle , BadgeStandAloneStyle , BadgeOverflowStyle } from './ui-elements-styled';
import { NavLink } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';

const Badges = () => {
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
                  <Badge count={25}>
                    
                    </Badge>
                    <Badge
                      count={4}
                      style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                    >
                      
                    </Badge>
                    <Badge count={109} style={{ backgroundColor: '#52c41a' }}>
                      
                    </Badge>
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
        </Row>
      </Main>
    </Fragment>
  );
};

export default Badges;
