import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { BasicFormWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';

const SocialProfile = () => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    values: '',
  });
  const handleSubmit = values => {
    setState({ ...state, values });
  };

  return (
    <Row>
      <Col md={10} offset={7}>
        <div className="social-form">
          <BasicFormWrapper>
            <Form form={form} name="editAccount" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Social Profiles
              </Heading>
              <Form.Item name="facebook" label="Facebook">
                <Input
                  prefix={
                    <span className="facebook">
                      <FeatherIcon icon="facebook" size={16} />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>
              <Form.Item name="twitter" label="Twitter">
                <Input
                  prefix={
                    <span className="twitter">
                      <FeatherIcon icon="twitter" size={16} />
                    </span>
                  }
                  placeholder="@username"
                />
              </Form.Item>
              <Form.Item name="linkedin" label="Linkedin">
                <Input
                  prefix={
                    <span className="linkedin">
                      <FeatherIcon icon="linkedin" size={16} />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>
              <Form.Item name="instagram" label="Instagram">
                <Input
                  prefix={
                    <span className="instagram">
                      <FeatherIcon icon="instagram" size={16} />
                    </span>
                  }
                  placeholder="URL"
                />
              </Form.Item>
              <Form.Item name="github" label="GitHub">
                <Input
                  prefix={
                    <span className="github">
                      <FeatherIcon icon="github" size={16} />
                    </span>
                  }
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item name="youtube" label="Youtube">
                <Input
                  prefix={
                    <span className="youtube">
                      <FeatherIcon icon="youtube" size={16} />
                    </span>
                  }
                  placeholder="Url"
                />
              </Form.Item>

              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button htmlType="submit">
                    <Link to="/pages/add-user/work">Back</Link>
                  </Button>
                  <Button onClick={handleSubmit} type="primary">
                    Save Profile
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
};

export default SocialProfile;
