import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../../../components/heading/heading';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Form, Input, Button } from 'antd';
import { login } from '../../../../redux/authentication/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { BasicFormWrapper } from '../../../styled';
import { AuthenticationWrapper } from './style';
import FeatherIcon from 'feather-icons-react';

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
    <AuthenticationWrapper>
      <p className="top-text">
        Don't have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <div className="authentication-box">
          <Heading className="authentication-box__title" as="h3">Sign in to <span className="autor-name">Admin</span> </Heading>
          <BasicFormWrapper>
            <div className="atbd-signin-from">
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
                <div className="remember-box">
                  <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
                  <NavLink to="/forgotPassword">Forgot password?</NavLink>
                </div>
                <Form.Item>
                  <Button className="signin-btn" size="large" htmlType="submit" type="primary">
                    {isLoading ? 'Loading...' : 'Sign In'}
                  </Button>
                </Form.Item>
                <p className="or-text">
                  <span>or</span>
                </p>
              </Form>
            </div>
          </BasicFormWrapper>
      </div>
    </AuthenticationWrapper>
    
  );
};

export default SignIn;
