import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Heading from '../../../../components/heading/heading';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Form, Input, Icon, Button } from 'antd';
import { login } from '../../../../redux/actions/authentication';
import { connect } from 'react-redux';

const SignIn = ({ form, login, isLoading }) => {
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    form.validateFields((err, values) => {
      if (!err) {
        //onsole.log('Received values of form: ', values);
        login();
      }
    });
  };
  const { getFieldDecorator } = form;
  const onChange = (checked, value) => {
    console.log(`checked = ${checked}`);
  };

  return (
    <div style={{ padding: '30px' }}>
      <p style={{ textAlign: 'right' }}>
        Don't have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <Heading as="h3">Sign in to Admin</Heading>
      <Form style={{ width: '400px' }} onSubmit={handleSubmit}>
        <Form.Item label="Username or Email Address">
          {getFieldDecorator('username', {
            initialValue: 'name@example.com',
            rules: [{ message: 'Please input your username or Email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name@example.com" />,
          )}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator('username', {
            initialValue: '123456',
            rules: [{ message: 'Please input your Password' }],
          })(<Input.Password placeholder="Password" />)}
        </Form.Item>
        <div>
          <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
          <NavLink to="/forgotPassword">Forgot password?</NavLink>
        </div>
        <Button onClick={handleSubmit} type="primary">
          {isLoading ? 'Loading...' : 'Sign In'}
        </Button>
        <p>or</p>
      </Form>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
  };
};
const mapStateToProps = state => {
  return {
    isLoading: state.auth.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'loginForm' })(SignIn));
