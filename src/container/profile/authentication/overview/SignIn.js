import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../../../components/heading/heading';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Form, Input, Button } from 'antd';
import { login } from '../../../../redux/authentication/actionCreator';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.loading);
  const [form] = Form.useForm();

  const handleSubmit = values => {
    dispatch(login());
  };

  const onChange = (checked, value) => {
    console.log(`checked = ${checked}`);
  };

  return (
    <div style={{ padding: '30px' }}>
      <p style={{ textAlign: 'right' }}>
        Don't have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <Heading as="h3">Sign in to Admin</Heading>
      <Form name="login" form={form} style={{ width: '400px' }} onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ message: 'Please input your username or Email!', required: true }]}
          initialValue="name@example.com"
          label="Username or Email Address"
        >
          <Input />
        </Form.Item>
        <Form.Item name="password" initialValue="123456" label="Password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <div>
          <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
          <NavLink to="/forgotPassword">Forgot password?</NavLink>
        </div>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            {isLoading ? 'Loading...' : 'Sign In'}
          </Button>
        </Form.Item>
        <p>or</p>
      </Form>
    </div>
  );
};

export default SignIn;
