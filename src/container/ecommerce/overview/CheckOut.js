import React from 'react';
import { Steps } from '../../../components/steps/steps';
import Heading from '../../../components/heading/heading';
import { Form, Input, Select } from 'antd';

const { Option } = Select;
const CheckOut = ({ form }) => {
  const next = current => {
    console.log('onChange:', current);
  };

  const prev = current => {
    console.log('onChange:', current);
  };

  const { getFieldDecorator } = form;

  return (
    <Steps
      isswitch
      current={2}
      height={400}
      steps={[
        {
          title: 'Create Account',
          content: (
            <div>
              <Heading as="h4">1. Please Create Your Account</Heading>
              <Form>
                <Form.Item label="Username">
                  {getFieldDecorator('username', {})(<Input placeholder="Username" />)}
                </Form.Item>
                <Form.Item label="Email Address">
                  {getFieldDecorator('email', {
                    rules: [{ type: 'email' }],
                  })(<Input placeholder="name@gmail.com" />)}
                </Form.Item>
                <Form.Item label="Password">
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        min: 6,
                        message: 'Enter a valid password. Min 6 charecters long.',
                      },
                    ],
                  })(<Input.Password placeholder="Password" />)}
                </Form.Item>
              </Form>
            </div>
          ),
        },
        {
          title: 'Shipping Address',
          content: (
            <div>
              <Heading as="h4">2. Please Fill in Your Shipping Address</Heading>
              <Form>
                <Form.Item label="Contact Name">
                  {getFieldDecorator('name', {})(<Input placeholder="Ibn adam" />)}
                </Form.Item>
                <Form.Item label="Company Name (Optional)">
                  {getFieldDecorator('company', {})(<Input placeholder="adam" />)}
                </Form.Item>
                <Form.Item label="Phone Number">
                  {getFieldDecorator('phone', {})(<Input placeholder="+880" />)}
                </Form.Item>
                <Form.Item label="Country/Region">
                  {getFieldDecorator('country', {
                    initialValue: '',
                  })(
                    <Select style={{ width: '100%' }}>
                      <Option value="">Please Select</Option>
                      <Option value="bangladesh">Bangladesh</Option>
                      <Option value="india">India</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item label="Street Address">
                  {getFieldDecorator('street', {})(<Input placeholder="House Number and Street Name" />)}
                </Form.Item>
                <Form.Item label="">
                  {getFieldDecorator('street2', {})(<Input placeholder="Apartment, Suite, Unit etc." />)}
                </Form.Item>
                <Form.Item label="City">{getFieldDecorator('city', {})(<Input placeholder="Enter City" />)}</Form.Item>
                <Form.Item label="Zip/Postal Code">
                  {getFieldDecorator('street2', {})(<Input placeholder="Enter Zip" />)}
                </Form.Item>
              </Form>
            </div>
          ),
        },
        {
          title: 'Payment Method',
          content: (
            <div>
              <Heading as="h4">3. Please Please Select Your Payment Method</Heading>
            </div>
          ),
        },
        {
          title: 'Review Order',
          content: 'Last-content',
        },
      ]}
      onNext={next}
      onPrev={prev}
    />
  );
};

export default Form.create({ name: 'checkout' })(CheckOut);
