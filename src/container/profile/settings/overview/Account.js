import React, { useState } from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import Heading from '../../../../components/heading/heading';

const Account = ({ form }) => {
  const [state, setState] = useState({
    name: 'clayton',
  });
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };
  const handleChange = e => {
    setState({
      name: e.target.value,
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Cards
      title={
        <div>
          <Heading as="h4">Account Settings</Heading>
          <span>Update your username and manage your account</span>
        </div>
      }
    >
      <Row>
        <Col md={12} offset={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="Username">
              {getFieldDecorator('username', {
                initialValue: state.name,
              })(<Input onChange={handleChange} />)}
            </Form.Item>
            <p>Your Dashboard URL: http://dashboard.com/{state.name}</p>
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                initialValue: 'contact@example.com',
                rules: [{ type: 'email' }],
              })(<Input />)}
            </Form.Item>
            <hr />
            <Row>
              <Col md={16}>
                <Heading as="h4">Close Account</Heading>
                <p>Delete Your Account and Account data</p>
              </Col>
              <Col md={8}>
                <Button type="danger">Close Account</Button>
              </Col>
            </Row>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary">
                Save Change
              </Button>
              &nbsp; &nbsp;
              <Button onClick={handleCancel} type="default">
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Cards>
  );
};

export default Form.create({ name: 'editAccount' })(Account);
