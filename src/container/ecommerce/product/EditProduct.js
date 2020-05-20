import React, { Fragment } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Select, InputNumber, Radio, Upload, message } from 'antd';
import { Main } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const { Dragger } = Upload;

const EditProduct = () => {
  const [form] = Form.useForm();

  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ];

  const props = {
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
    defaultFileList: [...fileList],
  };

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Fragment>
      <PageHeader ghost title="Edit Product" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row gutter={25}>
                <Col md={10} offset={7}>
                  <Form style={{ width: '100%' }} form={form} name="editProduct" onFinish={handleSubmit}>
                    <Cards headless bodyStyle={{ backgroundColor: '#F8F9FB', borderRadius: '20px' }}>
                      <Row gutter={15}>
                        <Col md={24}>
                          <Cards title="About Product">
                            <Form.Item name="name" initialValue="Red chair" label="Product Name">
                              <Input />
                            </Form.Item>
                            <Form.Item name="subtext" initialValue="Sub heading" label="Sub Text">
                              <Input />
                            </Form.Item>
                            <Form.Item name="category" initialValue="sunglasses" label="Category">
                              <Select style={{ width: '100%' }}>
                                <Option value="">Please Select</Option>
                                <Option value="wearingClothes">Wearing Clothes</Option>
                                <Option value="sunglasses">Sunglasses</Option>
                                <Option value="t-shirt">T-Shirt</Option>
                              </Select>
                            </Form.Item>

                            <Form.Item name="price" initialValue="120" label="Price">
                              <InputNumber
                                style={{ width: '100%' }}
                                prefix={<FeatherIcon icon="dollar-sign" size={14} />}
                              />
                            </Form.Item>

                            <Form.Item name="discount" initialValue="20%" label="Discount">
                              <InputNumber
                                style={{ width: '100%' }}
                                prefix={<FeatherIcon icon="percent" size={14} />}
                              />
                            </Form.Item>

                            <Form.Item name="status" initialValue="published" label="Status">
                              <Radio.Group>
                                <Radio value="published">Published</Radio>
                                <Radio value="draft">Draft</Radio>
                              </Radio.Group>
                            </Form.Item>

                            <Form.Item
                              name="description"
                              initialValue="loram ipsum dolor sit amit"
                              label="Product Description"
                            >
                              <Input.TextArea rows={5} />
                            </Form.Item>

                            <Form.Item name="mTitle" initialValue="Meta title" label="Meta Title">
                              <Input />
                            </Form.Item>

                            <Form.Item name="mKeyword" initialValue="Meta keyword" label="Meta Keyword">
                              <Input />
                            </Form.Item>
                          </Cards>
                        </Col>
                      </Row>
                    </Cards>

                    <Cards headless bodyStyle={{ backgroundColor: '#F8F9FB', borderRadius: '20px' }}>
                      <Row gutter={15}>
                        <Col md={24}>
                          <Cards title="Product Image">
                            <Dragger {...props}>
                              <p className="ant-upload-drag-icon">
                                <FeatherIcon icon="upload" size={50} />
                              </p>
                              <Heading as="h4" className="ant-upload-text">
                                Drag and drop an image
                              </Heading>
                              <p className="ant-upload-hint">or Browse to choose a file</p>
                            </Dragger>
                          </Cards>
                        </Col>
                      </Row>
                    </Cards>
                    <Form.Item>
                      <Button
                        onClick={() => {
                          return form.resetFields();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button htmlType="submit" type="primary">
                        Save Product
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default EditProduct;
