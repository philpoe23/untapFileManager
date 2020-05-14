import React from 'react';
import { Row, Col, Form, Input, DatePicker, Radio, Select } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';

const Work = ({ form, match }) => {
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    form.validateFields((err, values) => {
      if (!err) {
        //form.resetFields();
      }
    });
  };
  const { getFieldDecorator } = form;

  return (
    <Row>
      <Col md={10} offset={7}>
        <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <Heading as="h4">Work Information</Heading>

          <Form.Item label="Company Name">
            {getFieldDecorator('company', {})(<Input placeholder="Company Name" />)}
          </Form.Item>

          <Form.Item label="Department">
            {getFieldDecorator('department', {})(<Input placeholder="Department name" />)}
          </Form.Item>

          <Form.Item label="Designation">
            {getFieldDecorator('designation', {})(<Input placeholder="Designation" />)}
          </Form.Item>

          <Form.Item label="Hiring Date">
            {getFieldDecorator('hiringDate', {
              rules: [{ type: 'object', whitespace: true }],
            })(<DatePicker format={dateFormat} style={{ width: '100%' }} />)}
          </Form.Item>

          <Form.Item label="Status">
            {getFieldDecorator('status', {
              initialValue: 'Active',
            })(
              <Radio.Group>
                <Radio value="Active">Active</Radio>
                <Radio value="Deactivated">Deactivated</Radio>
                <Radio value="Blocked">Blocked</Radio>
              </Radio.Group>,
            )}
          </Form.Item>

          <Button
            onClick={() => {
              return form.resetFields();
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} type="primary">
            <Link to={'/pages/add-user/social'}>Next</Link>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Form.create({ name: 'work' })(Work);
