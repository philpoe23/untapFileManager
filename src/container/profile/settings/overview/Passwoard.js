import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import { BasicFormWrapper } from '../../../styled';
import Heading from '../../../../components/heading/heading';
import { ChangePasswordWrapper } from './style';

const Password = () => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };
  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <ChangePasswordWrapper>

      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Password Settings</Heading>
            <span>Change or reset your account password</span>
          </div>
        }
      >
        <Row>
          <Col md={12} offset={6}>
            <BasicFormWrapper>
              <Form form={form} name="changePassword" onFinish={handleSubmit}>
                <Form.Item name="old" label="Old Password">
                  <Input />
                </Form.Item>
                <Form.Item name="new" label="New Password">
                  <Input.Password />
                </Form.Item>
                <p className="input-message">Minimum 6 characters</p>
                <Form.Item>
                  <div className="setting-form-actions">
                    <Button htmlType="submit" type="primary">
                      Change Password
                    </Button>
                    &nbsp; &nbsp;
                    <Button onClick={handleCancel} type="default">
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>

    </ChangePasswordWrapper>
  );
};

export default Password;
