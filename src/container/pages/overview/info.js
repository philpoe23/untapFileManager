import React from 'react';
import { Row, Col, Form, Input, Upload, Select } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const Info = ({ form, match, location }) => {
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
          <Heading as="h4">Personal Information</Heading>

          <figure>
            <img src={require('../../../static/img/avatar/profileImage.png')} alt="" />
            <figcaption>
              <Upload>
                <Link to="#">
                  <FeatherIcon icon="camera" size={16} />
                </Link>
              </Upload>
              <div className="info">
                <Heading as="h4">Profile Photo</Heading>
              </div>
            </figcaption>
          </figure>

          <Form.Item label="Name">{getFieldDecorator('name', {})(<Input placeholder="Input Name" />)}</Form.Item>

          <Form.Item label="Email Address">
            {getFieldDecorator('email', {
              rules: [{ message: 'Please input your email!', type: 'email' }],
            })(<Input placeholder="name@example.com" />)}
          </Form.Item>

          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {})(<Input placeholder="+440 2546 5236" />)}
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
                <Option value="khulna">Khulna</Option>
                <Option value="barisal">Barisal</Option>
              </Select>,
            )}
          </Form.Item>

          <Form.Item label="Website">
            {getFieldDecorator('website', {})(<Input placeholder="www.example.com" />)}
          </Form.Item>

          <Button
            onClick={() => {
              return form.resetFields();
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} type="primary">
            <Link to={match.path + '/work'}>Next</Link>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Form.create({ name: 'info' })(Info);
