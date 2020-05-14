import React, { Fragment } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Select, InputNumber } from 'antd';
import { Main } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';

const AddProduct = ({ form }) => {
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
    <Fragment>
      <PageHeader ghost title="Add Product" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row gutter={25}>
                <Col md={10} offset={7}>
                  <Cards headless bodyStyle={{ backgroundColor: '#F8F9FB', borderRadius: '20px' }}>
                    <Row gutter={15}>
                      <Col md={24}>
                        <Cards title="About Product">
                          <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
                            <Form.Item label="Product Name">{getFieldDecorator('name', {})(<Input />)}</Form.Item>
                            <Form.Item label="Sub Text">{getFieldDecorator('subtext', {})(<Input />)}</Form.Item>
                            <Form.Item label="Category">
                              {getFieldDecorator('category', {
                                initialValue: '',
                              })(
                                <Select style={{ width: '100%' }}>
                                  <Option value="">Please Select</Option>
                                  <Option value="wearingClothes">Wearing Clothes</Option>
                                  <Option value="sunglasses">Sunglasses</Option>
                                  <Option value="t-shirt">T-Shirt</Option>
                                </Select>,
                              )}
                            </Form.Item>

                            <Form.Item label="Price">
                              {getFieldDecorator(
                                'price',
                                {},
                              )(
                                <InputNumber
                                  style={{ width: '100%' }}
                                  prefix={<FeatherIcon icon="dollar-sign" size={14} />}
                                />,
                              )}
                            </Form.Item>

                            <Form.Item label="Discount">
                              {getFieldDecorator(
                                'discount',
                                {},
                              )(
                                <InputNumber
                                  style={{ width: '100%' }}
                                  prefix={<FeatherIcon icon="percent" size={14} />}
                                />,
                              )}
                            </Form.Item>

                            {/* <Form.Item label="City">
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
                            </Form.Item> */}

                            <Button
                              onClick={() => {
                                return form.resetFields();
                              }}
                            >
                              Cancel
                            </Button>
                            <Button onClick={handleSubmit} type="primary">
                              Save Product
                            </Button>
                          </Form>
                        </Cards>
                      </Col>
                    </Row>
                  </Cards>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Form.create({ name: 'addProduct' })(AddProduct);
