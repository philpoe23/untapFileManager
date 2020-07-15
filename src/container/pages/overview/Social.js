import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';

const SocialProfile = () => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row>
      <Col md={10} offset={7}>
        <Form form={form} name="editAccount" onFinish={handleSubmit}>
          <Heading as="h4">Social Profiles</Heading>
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
            <Button htmlType="submit">
              <Link to="/pages/add-user/work">Back</Link>
            </Button>
            &nbsp; &nbsp;
            <Button onClick={handleSubmit} type="primary">
              Save Profile
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SocialProfile;
