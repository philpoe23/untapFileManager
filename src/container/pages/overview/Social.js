import React from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const SocialProfile = ({ form }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Row>
      <Col md={10} offset={7}>
        <Form onSubmit={handleSubmit}>
          <Heading as="h4">Social Profiles</Heading>
          <Form.Item label="Facebook">
            {getFieldDecorator('facebook')(
              <Input prefix={<FeatherIcon icon="facebook" size={16} />} placeholder="URL" />,
            )}
          </Form.Item>
          <Form.Item label="Twitter">
            {getFieldDecorator('twitter')(
              <Input prefix={<FeatherIcon icon="twitter" size={16} />} placeholder="@username" />,
            )}
          </Form.Item>
          <Form.Item label="Linkedin">
            {getFieldDecorator('linkedin')(
              <Input prefix={<FeatherIcon icon="linkedin" size={16} />} placeholder="URL" />,
            )}
          </Form.Item>
          <Form.Item label="Instagram">
            {getFieldDecorator('instagram')(
              <Input prefix={<FeatherIcon icon="instagram" size={16} />} placeholder="URL" />,
            )}
          </Form.Item>
          <Form.Item label="GitHub">
            {getFieldDecorator('github')(
              <Input prefix={<FeatherIcon icon="github" size={16} />} placeholder="Username" />,
            )}
          </Form.Item>
          <Form.Item label="Youtube">
            {getFieldDecorator('youtube')(
              <Input prefix={<FeatherIcon icon="youtube" size={16} />} placeholder="Url" />,
            )}
          </Form.Item>

          <Form.Item>
            <Button>
              <Link to={'/pages/add-user/work'}>Back</Link>
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

export default Form.create({ name: 'editAccount' })(SocialProfile);
