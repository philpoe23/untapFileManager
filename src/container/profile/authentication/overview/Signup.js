import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../../../components/heading/heading';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Form, Input, Button } from 'antd';

const SignUp = () => {
  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  const onChange = (checked, value) => {
    console.log(`checked = ${checked}`);
  };

  return (
    <div style={{ padding: '30px' }}>
      <p style={{ textAlign: 'right' }}>
        Allready have an account? <NavLink to="/">Sign In</NavLink>
      </p>
      <Heading as="h3">Sign Up to Admin</Heading>
      <Form name="register" style={{ width: '400px' }} onFinish={handleSubmit}>
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
        <div>
          <Checkbox onChange={onChange}>
            Creating an account means you’re okay with our Terms of Service and Privacy Policy
          </Checkbox>
        </div>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Create Account
          </Button>
        </Form.Item>
        <p>or</p>
      </Form>
    </div>
  );
};

export default SignUp;
