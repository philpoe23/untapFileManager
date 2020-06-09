import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../../../components/heading/heading';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Form, Input, Button } from 'antd';
import { login } from '../../../../redux/authentication/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { AuthWrapper } from './style';
=======
import { BasicFormWrapper } from '../../../styled';
import { AuthenticationWrapper } from './style';
import FeatherIcon from 'feather-icons-react';
>>>>>>> e6eb4ca62be90daa944474c270b62034ca333562

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
    <AuthWrapper>
      <p className="auth-notice">
        Don't have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">Sign in to <span className="color-secondary">Admin</span></Heading>
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
          <div className="auth-form-action">
            <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
            <NavLink to="/forgotPassword">Forgot password?</NavLink>
          </div>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
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

export default SignIn;
