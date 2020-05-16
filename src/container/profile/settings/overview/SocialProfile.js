import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import Heading from '../../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';

const SocialProfile = () => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <Cards
      title={
        <div>
          <Heading as="h4">Social Profiles</Heading>
          <span>Add elsewhere links to your profile </span>
        </div>
      }
    >
      <Row>
        <Col md={12} offset={6}>
          <Form name="social" onFinish={handleSubmit}>
            <Form.Item name="facebook" label="Facebook">
              <Input prefix={<FeatherIcon icon="facebook" size={16} />} placeholder="URL" />
            </Form.Item>
            <Form.Item name="twitter" label="Twitter">
              <Input prefix={<FeatherIcon icon="twitter" size={16} />} placeholder="@username" />
            </Form.Item>
            <Form.Item name="linkedin" label="Linkedin">
              <Input prefix={<FeatherIcon icon="linkedin" size={16} />} placeholder="URL" />
            </Form.Item>
            <Form.Item name="instagram" label="Instagram">
              <Input prefix={<FeatherIcon icon="instagram" size={16} />} placeholder="URL" />
            </Form.Item>
            <Form.Item name="github" label="GitHub">
              <Input prefix={<FeatherIcon icon="github" size={16} />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="youtube" label="Youtube">
              <Input prefix={<FeatherIcon icon="youtube" size={16} />} placeholder="Url" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Update Social Profile
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

export default SocialProfile;
