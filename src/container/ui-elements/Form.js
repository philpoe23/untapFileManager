import React, { useState } from 'react';
import { Row, Col, Form, Select, Input, InputNumber } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Cascader } from '../../components/cascader/cascader';
import { Button } from '../../components/buttons/buttons';

const { Option } = Select;
const { TextArea } = Input;

const Forms = () => {
  const [form] = Form.useForm();
  const [state, setstate] = useState({
    values: {},
    cascaderItem: [],
  });
  const handleSubmit = values => {
    setstate({ ...state, values });
  };

  const onChangeCascader = value => {
    setstate({ ...state, cascaderItem: value });
  };

  return (
    <>
      <PageHeader ghost title="Form" />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={24} xs={24}>
            <Cards title="Elements of Form" caption="The simplest use of Form">
              <Form layout="vertical" form={form} name="basicforms" onFinish={handleSubmit}>
                <Form.Item label="Username" name="username">
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  label="Age"
                  name="age"
                  rules={[{ required: true, message: 'Please input your age!', type: 'number' }]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Website" name="website">
                  <Input placeholder="http://website.com" />
                </Form.Item>
                <Form.Item label="Textarea" name="textarea">
                  <TextArea />
                </Form.Item>
                <p>Cascader</p>
                <Cascader onChange={onChangeCascader} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />

                <Form.Item label="Selectc" name="Selectc">
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
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary" style={{ marginTop: '20px' }}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Forms;
