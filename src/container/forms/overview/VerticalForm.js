import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';

const VerticalForm = () => {
  return (
    <BasicFormWrapper>
      <VerticalFormStyleWrap>
        <Card title="Vertical Form">
          <Form name="sDash_vertical-form" layout="vertical">
            <Form.Item name="name" initialValue="Duran Clayton" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" initialValue="username@email.com" label="Email Address">
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item name="password" initialValue="1234567" label="Password">
              <Input.Password />
            </Form.Item>
            <div className="sDash_form-action">
              <Button className="btn-signin" htmlType="submit" type="light" size="large">
                Cancel
              </Button>
              <Button className="btn-signin" type="primary" size="large">
                Save
              </Button>
            </div>
          </Form>
        </Card>
      </VerticalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { VerticalForm };
