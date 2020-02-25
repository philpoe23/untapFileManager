import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const hasErrors = fieldsError => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const WrappedNormalLoginForm = props => {
  useEffect(() => {
    props.form.validateFields();
    return () => {};
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  // Only show error after a field is touched.
  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const InlineLoginForm = Form.create({ name: 'normal_login' })(WrappedNormalLoginForm);

// InlineLoginForm.propTypes = {
//   placement: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   action: PropTypes.array,
//   content: PropTypes.object.isRequired,
// };

const NormalLoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <NavLink className="login-form-forgot" to="#">
          Forgot password
        </NavLink>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <NavLink to="#">register now!</NavLink>
      </Form.Item>
    </Form>
  );
};
const LogInForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export { InlineLoginForm, LogInForm };
