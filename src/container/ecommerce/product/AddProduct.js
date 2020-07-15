import React from 'react';
import { Row, Col, Form, Input, Select, InputNumber, Radio, Upload, message } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main, BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import { AddProductForm } from '../Style';
import Heading from '../../../components/heading/heading';

import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const { Option } = Select;
const { Dragger } = Upload;

const AddProduct = () => {
  const [form] = Form.useForm();

  const fileUploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    listType: 'picture',
  };

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <>
      <PageHeader
        ghost
        title="Add Product"
        buttons={[
          <div className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless>
              <Row gutter={25} justify="center">
                <Col xxl={10} md={14} sm={18} xs={24}>
                  <AddProductForm>
                    <Form style={{ width: '100%' }} form={form} name="addProduct" onFinish={handleSubmit}>
                      <BasicFormWrapper>
                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col xs={24}>
                              <div className="add-product-content">
                                <Cards title="About Product">
                                  <Form.Item name="name" label="Product Name">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="subtext" label="Sub Text">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="category" initialValue="" label="Category">
                                    <Select style={{ width: '100%' }}>
                                      <Option value="">Please Select</Option>
                                      <Option value="wearingClothes">Wearing Clothes</Option>
                                      <Option value="sunglasses">Sunglasses</Option>
                                      <Option value="t-shirt">T-Shirt</Option>
                                    </Select>
                                  </Form.Item>

                                  <Form.Item name="price" label="Price">
                                    <InputNumber
                                      style={{ width: '100%' }}
                                      prefix={<FeatherIcon icon="dollar-sign" size={14} />}
                                    />
                                  </Form.Item>

                                  <Form.Item name="discount" label="Discount">
                                    <InputNumber
                                      style={{ width: '100%' }}
                                      prefix={<FeatherIcon icon="percent" size={14} />}
                                    />
                                  </Form.Item>

                                  <Form.Item name="status" label="Status">
                                    <Radio.Group>
                                      <Radio value="Published">Published</Radio>
                                      <Radio value="Draft">Draft</Radio>
                                    </Radio.Group>
                                  </Form.Item>

                                  <Form.Item name="description" label="Product Description">
                                    <Input.TextArea rows={5} />
                                  </Form.Item>
                                  <Form.Item name="mTitle" label="Meta Title">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="mKeyword" label="Meta Keyword">
                                    <Input />
                                  </Form.Item>
                                </Cards>
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col md={24}>
                              <div className="add-product-content">
                                <Cards title="Product Image">
                                  <Dragger fileUploadProps={fileUploadProps}>
                                    <p className="ant-upload-drag-icon">
                                      <FeatherIcon icon="upload" size={50} />
                                    </p>
                                    <Heading as="h4" className="ant-upload-text">
                                      Drag and drop an image
                                    </Heading>
                                    <p className="ant-upload-hint">
                                      or <span>Browse</span> to choose a file
                                    </p>
                                  </Dragger>
                                </Cards>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="add-form-action">
                          <Form.Item>
                            <Button
                              className="btn-cancel"
                              size="large"
                              onClick={() => {
                                return form.resetFields();
                              }}
                            >
                              Cancel
                            </Button>
                            <Button size="large" htmlType="submit" type="primary" raised>
                              Save Product
                            </Button>
                          </Form.Item>
                        </div>
                      </BasicFormWrapper>
                    </Form>
                  </AddProductForm>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default AddProduct;
