import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { HorizontalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';

const HorizontalForm = () => {
  return (
    <BasicFormWrapper>
      <HorizontalFormStyleWrap>
        <Card title="Horizontal Form">
          <Form name="login" layout="horizontal">
            <Row align="middle">
              <Col lg={8}>
                <label htmlFor="name">Name</label>
              </Col>
              <Col lg={16}>
                <Form.Item name="name" initialValue="Duran Clayton">
                  <Input placeholder="Enter Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8}>
                <label htmlFor="email">Email Address</label>
              </Col>
              <Col lg={16}>
                <Form.Item name="email" initialValue="username@email.com">
                  <Input placeholder="Enter Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8}>
                <label htmlFor="password">Password</label>
              </Col>
              <Col lg={16}>
                <Form.Item name="password" initialValue="1234567">
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={16} offset={8}>
                <div className="sDash_form-action">
                  <Button className="btn-signin" htmlType="submit" type="light" size="large">
                    Cancel
                  </Button>
                  <Button className="btn-signin" type="primary" size="large">
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { HorizontalForm };
