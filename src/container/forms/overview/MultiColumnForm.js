import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { BasicFormWrapper } from '../../styled';

const MultiColumnForm = () => {
  return (
    <BasicFormWrapper>
      <Card title="Horizontal Form">
        <Form name="login" layout="horizontal">
          <Row gutter={30}>
            <Col lg={12}>
              <Form.Item name="sDash_f-name">
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item name="sDash_city">
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item name="sDash_company">
                <Input placeholder="Company" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item name="sDash_l-name">
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item name="sDash_country">
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item name="sDash_email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="mt-30">
              <div className="sDash_form-action">
                <Button className="btn-signin" htmlType="submit" type="light" size="large">
                  Cancel
                </Button>
                <Button className="btn-signin" type="primary" size="large">
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </BasicFormWrapper>
  );
};

export { MultiColumnForm };
