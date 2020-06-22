import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../../../components/heading/heading';
import { Form, Input, Button } from 'antd';
import { AuthWrapper } from './style';

const ForgotPassword = () => {
  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <AuthWrapper>
      <div className="auth-contents">
        <Form name="forgotpass" onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">Forgot Password?</Heading>
          <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">
              Send Reset Instructions
            </Button>
          </Form.Item>
          <p>
            Return to <NavLink to="/">Sign In</NavLink>
          </p>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
