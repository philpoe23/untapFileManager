import React, { useState } from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Select, Button } from 'antd';
import Heading from '../../../../components/heading/heading';
import { Tag } from '../../../../components/tags/tags';

const { Option } = Select;
const Profile = ({ form }) => {
  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
  });
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', { ...values, tags: state.tags });
      }
    });
  };
  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };
  const checked = checked => {
    setState({ tags: checked });
  };
  const { getFieldDecorator } = form;
  return (
    <Cards
      title={
        <div>
          <Heading as="h4">Edit Profile</Heading>
          <span>Set Up Your Personal Information</span>
        </div>
      }
    >
      <Row>
        <Col md={12} offset={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                initialValue: 'Duran Clayton',
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phone', {
                initialValue: '01742920502',
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Country">
              {getFieldDecorator('country', {
                initialValue: '',
              })(
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="bangladesh">Bangladesh</Option>
                  <Option value="india">India</Option>
                  <Option value="pakistan">Pakistan</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="City">
              {getFieldDecorator('city', {
                initialValue: '',
              })(
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="dhaka">Dhaka</Option>
                  <Option value="mymensingh">Mymensingh</Option>
                  <Option value="khulna">Khulna</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="Company Name">
              {getFieldDecorator('company', {
                initialValue: 'Example',
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Website">
              {getFieldDecorator('website', {
                initialValue: 'www.example.com',
              })(<Input />)}
            </Form.Item>
            <Form.Item label="User Bio">
              {getFieldDecorator('userBio', {
                initialValue:
                  'Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.',
              })(<Input.TextArea rows={3} />)}
            </Form.Item>
            <Tag animate onChange={checked} data={state.tags} />,
            <Form.Item>
              <Button onClick={handleSubmit} type="primary">
                Update Profile
              </Button>
              &nbsp; &nbsp;
              <Button onClick={handleCancel} type="default">
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Cards>
  );
};

export default Form.create({ name: 'editProfile' })(Profile);
