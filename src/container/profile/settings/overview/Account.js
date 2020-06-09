import React, { useState } from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input } from 'antd';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import { AccountWrapper } from './style';

const Account = () => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    name: 'clayton',
  });

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  const handleChange = e => {
    setState({
      name: e.target.value,
    });
  };

  return (
    <AccountWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Account Settings</Heading>
            <span>Update your username and manage your account</span>
          </div>
        }
      >
        <Row>
          <Col md={24}>
            <BasicFormWrapper>
              <Form form={form} name="editaccount" onFinish={handleSubmit}>
                <div className="account-form-wrapper">
                  <div className="account-form">
                    <Form.Item name="username" initialValue={state.name} label="Username">
                      <Input onChange={handleChange} />
                    </Form.Item>
                    <p>Your Dashboard URL: http://dashboard.com/<span>{state.name}</span></p>
                    <Form.Item name="email" initialValue="contact@example.com" rules={[{ type: 'email' }]} label="Email">
                      <Input />
                    </Form.Item>
                  </div>
                </div>

                <div className="account-closing">
                  <Row>
                    <Col md={18}>
                      <Heading className="account-closing__title" as="h4">Close Account</Heading>
                      <p>Delete Your Account and Account data</p>
                    </Col>
                    <Col md={6}>
                      <Button size="small" type="danger">Close Account</Button>
                    </Col>
                  </Row>
                </div>
                
                <div className="account-bottom">
                    <div className="setting-form-actions">
                      <Button size="default" htmlType="submit" type="primary">
                        Save Change
                      </Button>
                      &nbsp; &nbsp;
                      <Button size="default" onClick={handleCancel} type="light">
                        Cancel
                      </Button>
                    </div>
                </div>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>
    </AccountWrapper>
  );
};

export default Account;
