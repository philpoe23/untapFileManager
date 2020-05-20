import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import Heading from '../../../../components/heading/heading';

const Password = () => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };
  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

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
          <Form form={form} name="changePassword" onFinish={handleSubmit}>
            <Form.Item name="old" label="Old Password">
              <Input />
            </Form.Item>
            <Form.Item name="new" label="New Password">
              <Input.Password />
            </Form.Item>
            <p>Minimum 6 characters</p>
            <Form.Item>
              <Button htmlType="submit" type="primary">
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

export default Password;
