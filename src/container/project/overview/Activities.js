import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Col, Row } from 'antd';
import Heading from '../../../components/heading/heading';

const Activities = () => {
  return (
    <Row gutter={15}>
      <Col md={4}>
        <div>
          <Heading as="h4">22</Heading>
          December
        </div>
      </Col>
      <Col md={20}>
        <Row gutter={3}>
          <Col md={2}>
            <FeatherIcon icon="plus" size="14" />
            <img style={{ width: '30px' }} src={require('../../../static/img/users/1.png')} alt="" />
          </Col>
          <Col md={18}>
            <Heading as="h5">
              Mumtahin <span>add new task</span> Dashboard Project
            </Heading>
            <p>3:30 PM</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Activities;
