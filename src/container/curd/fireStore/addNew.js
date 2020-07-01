import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fbDataSubmit } from '../../../redux/firestore/actionCreator';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const AddNew = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.crud.loading);

  const [form] = Form.useForm();
  const [state, setState] = useState({
    join: '',
  });

  const handleSubmit = values => {
    dispatch(fbDataSubmit({ ...values, join: state.join, id: new Date().getTime() }));
    form.resetFields();
  };

  const onChange = (date, dateString) => {
    setState({ join: dateString });
  };

  return (
    <Fragment>
      <PageHeader
        buttons={[
          <Link key="1" to="/firestore/view">
            View All
          </Link>,
        ]}
        ghost
        title="Add New"
      />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row>
                <Col md={10} offset={7}>
                  <Form style={{ width: '100%' }} layout="vertical" form={form} name="addnew" onFinish={handleSubmit}>
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
                    <Form.Item name="name" label="Name">
                      <Input placeholder="Input Name" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ type: 'email' }]} label="Email">
                      <Input placeholder="example@gmail.com" />
                    </Form.Item>
                    <Form.Item name="country" initialValue="" label="Country">
                      <Select style={{ width: '100%' }}>
                        <Option value="">Please Select</Option>
                        <Option value="bangladesh">Bangladesh</Option>
                        <Option value="india">India</Option>
                        <Option value="pakistan">Pakistan</Option>
                        <Option value="srilanka">Srilanka</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="city" initialValue="" label="City">
                      <Select style={{ width: '100%' }}>
                        <Option value="">Please Select</Option>
                        <Option value="dhaka">Dhaka</Option>
                        <Option value="mymensingh">Mymensingh</Option>
                        <Option value="khulna">Khulna</Option>
                        <Option value="barisal">Barisal</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="company" label="Company">
                      <Input placeholder="Company Name" />
                    </Form.Item>
                    <Form.Item name="position" label="Position">
                      <Input placeholder="Position" />
                    </Form.Item>
                    <Form.Item label="Joining Date">
                      <DatePicker onChange={onChange} style={{ width: '100%' }} format={dateFormat} />
                    </Form.Item>
                    <Form.Item name="status" label="Status">
                      <Radio.Group>
                        <Radio value="active">Active</Radio>
                        <Radio value="deactivated">Deactivated</Radio>
                        <Radio value="blocked">Blocked</Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Button htmlType="submit" type="primary">
                      {isLoading ? 'Loading...' : 'Submit'}
                    </Button>
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

export default AddNew;
