import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../../../components/heading/heading';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import { AuthWrapper } from './style';

const SignUp = () => {
  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  const onChange = (checked, value) => {
    console.log(`checked = ${checked}`);
  };

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Allready have an account? <NavLink to="/">Sign In</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="register" onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">Sign Up to <span>Admin</span></Heading>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your Full name!' }]}>
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input placeholder="name@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange}>
              Creating an account means you’re okay with our Terms of Service and Privacy Policy
            </Checkbox>
          </div>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">
              Create Account
            </Button>
          </Form.Item>
          <p className="form-divider"><span>Or</span></p>
          <ul className="social-login">
            <li><a href="/"><GoogleOutlined /> <span>Sign in with Google</span></a></li>
            <li><a href="/"><FacebookOutlined /></a></li>
            <li><a href="/"><TwitterOutlined /></a></li>
          </ul>
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
