import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import Heading from '../../../../components/heading/heading';

const Password = ({ form }) => {
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

  const { getFieldDecorator } = form;
  return (
    <Cards
      title={
        <div>
          <Heading as="h4">Password Settings</Heading>
          <span>Change or reset your account password</span>
        </div>
      }
    >
      <Row>
        <Col md={12} offset={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="Old Password">{getFieldDecorator('oldPassword', {})(<Input />)}</Form.Item>
            <Form.Item label="New Password">{getFieldDecorator('newPassword', {})(<Input.Password />)}</Form.Item>
            <p>Minimum 6 characters</p>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary">
                Change Password
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

export default Form.create({ name: 'editAccount' })(Password);
