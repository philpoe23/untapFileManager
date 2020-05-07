import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../../../components/heading/heading';
import { Form, Input, Button } from 'antd';

const ForgotPassword = ({ form }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = form;

  return (
    <div style={{ padding: '30px' }}>
      <Heading as="h3">Forgot Password?</Heading>
      <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
      <Form style={{ width: '400px' }} onSubmit={handleSubmit}>
        <Form.Item label="Email Address">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!', type: 'email' }],
          })(<Input placeholder="name@example.com" />)}
        </Form.Item>
        <Button type="primary">Send Reset Instructions</Button>
        <p>
          Return to <NavLink to="/">Sign In</NavLink>
        </p>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'loginForm' })(ForgotPassword);
