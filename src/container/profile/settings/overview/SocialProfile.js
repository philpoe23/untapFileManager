import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Button } from 'antd';
import Heading from '../../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';

const SocialProfile = ({ form }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const handleCancel = e => {
    e.preventDefault();
    form.resetFields();
  };

  const { getFieldDecorator } = form;
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
          <Form onSubmit={handleSubmit}>
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
              <Button onClick={handleSubmit} type="primary">
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

export default Form.create({ name: 'editAccount' })(SocialProfile);
