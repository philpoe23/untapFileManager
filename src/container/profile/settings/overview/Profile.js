import React, { useState } from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Select, Button } from 'antd';
import Heading from '../../../../components/heading/heading';
import { Tag } from '../../../../components/tags/tags';

const { Option } = Select;
const Profile = () => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
  });

  const handleSubmit = values => {
    console.log('Received values of form: ', { ...values, tags: state.tags });
  };

  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  const checked = checked => {
    setState({ tags: checked });
  };

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
          <Form name="editProfile" onFinish={handleSubmit}>
            <Form.Item name="name" initialValue="Duran Clayton" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="phone" initialValue="01742920502" label="Phone Number">
              <Input />
            </Form.Item>
            <Form.Item name="country" initialValue="" label="Country">
              <Select style={{ width: '100%' }}>
                <Option value="">Please Select</Option>
                <Option value="bangladesh">Bangladesh</Option>
                <Option value="india">India</Option>
                <Option value="pakistan">Pakistan</Option>
              </Select>
            </Form.Item>
            <Form.Item name="city" initialValue="" label="City">
              <Select style={{ width: '100%' }}>
                <Option value="">Please Select</Option>
                <Option value="dhaka">Dhaka</Option>
                <Option value="mymensingh">Mymensingh</Option>
                <Option value="khulna">Khulna</Option>
              </Select>
            </Form.Item>
            <Form.Item name="company" initialValue="Example" label="Company Name">
              <Input />
            </Form.Item>
            <Form.Item name="website" initialValue="www.example.com" label="Website">
              <Input />
            </Form.Item>
            <Form.Item
              name="userBio"
              initialValue="Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee."
              label="User Bio"
            >
              <Input.TextArea rows={3} />
            </Form.Item>
            <Tag animate onChange={checked} data={state.tags} />,
            <Form.Item>
              <Button htmlType="submit" type="primary">
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

export default Profile;
