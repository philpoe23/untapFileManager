import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Icon, Select, Input, InputNumber } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Cascader } from '../../components/cascader/cascader';
import { Button } from '../../components/buttons/buttons';
const { Option } = Select;
const { TextArea } = Input;
const Forms = ({ form }) => {
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
    <Fragment>
      <PageHeader ghost title="Form" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Elements of Form" caption="The simplest use of Form">
              <Form onSubmit={handleSubmit}>
                <Form.Item label="Username">
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
                  )}
                </Form.Item>
                <Form.Item label="Email">
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!', type: 'email' }],
                  })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
                </Form.Item>
                <Form.Item label="Age">
                  {getFieldDecorator('age', {
                    rules: [{ required: true, message: 'Please input your age!', type: 'number' }],
                  })(<InputNumber />)}
                </Form.Item>
                <Form.Item label="Website">
                  {getFieldDecorator('website', {
                    rules: [{}],
                  })(<Input placeholder="http://website.com" />)}
                </Form.Item>
                <Form.Item label="Textarea">
                  {getFieldDecorator('textarea', {
                    rules: [{}],
                  })(<TextArea />)}
                </Form.Item>
                <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
                <Form.Item>
                  <Button onSubmit={handleSubmit} type="primary">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Form.create({ name: 'form' })(Forms);
