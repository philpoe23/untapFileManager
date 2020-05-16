import React from 'react';
import { Row, Col, Form, Input, DatePicker, Radio } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';

const dateFormat = 'MM/DD/YYYY';

const Work = () => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Row>
      <Col md={10} offset={7}>
        <Form style={{ width: '100%' }} form={form} name="work" onFinish={handleSubmit}>
          <Heading as="h4">Work Information</Heading>

          <Form.Item name="company" label="Company Name">
            <Input placeholder="Company Name" />
          </Form.Item>

          <Form.Item name="department" label="Department">
            <Input placeholder="Department name" />
          </Form.Item>

          <Form.Item name="designation" label="Designation">
            <Input placeholder="Designation" />
          </Form.Item>

          <Form.Item name="hiringDate" rules={[{ type: 'object', whitespace: true }]} label="Hiring Date">
            <DatePicker format={dateFormat} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="status" initialValue="active" label="Status">
            <Radio.Group>
              <Radio value="active">Active</Radio>
              <Radio value="deactivated">Deactivated</Radio>
              <Radio value="blocked">Blocked</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              onClick={() => {
                return form.resetFields();
              }}
            >
              Cancel
            </Button>
            <Button htmlType="submit" type="primary">
              <Link to={'/pages/add-user/social'}>Next</Link>
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Work;
