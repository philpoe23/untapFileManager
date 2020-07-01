import React, { Fragment, useEffect, useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fbDataUpdate, fbDataSingle } from '../../../redux/firestore/actionCreator';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
const Edit = ({ match }) => {
  const dispatch = useDispatch();

  const { crud, isLoading } = useSelector(state => {
    return {
      crud: state.singleCrud.data,
      isLoading: state.crud.loading,
    };
  });
  const [state, setState] = useState({
    join: crud === null ? 'Loading....' : crud.join,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      dispatch(fbDataSingle(parseInt(match.params.id)));
    }
    return () => {
      unmounted = true;
    };
  }, [dispatch, match]);

  const handleSubmit = values => {
    dispatch(fbDataUpdate(parseInt(match.params.id), { ...values, join: state.join, id: parseInt(match.params.id) }));
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
        title="Update Your Recored"
      />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row>
                <Col md={10} offset={7}>
                  <Form style={{ width: '100%' }} layout="vertical" form={form} name="edit" onFinish={handleSubmit}>
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
                    <Form.Item name="name" initialValue={crud === null ? 'Loading....' : crud.name} label="Name">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      initialValue={crud === null ? 'Loading....' : crud.email}
                      name="email"
                      rules={[{ type: 'email' }]}
                      label="Email"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="country"
                      initialValue={crud === null ? 'Loading....' : crud.country}
                      label="Country"
                    >
                      <Select style={{ width: '100%' }}>
                        <Option value="">Please Select</Option>
                        <Option value="bangladesh">Bangladesh</Option>
                        <Option value="india">India</Option>
                        <Option value="pakistan">Pakistan</Option>
                        <Option value="srilanka">Srilanka</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="city" initialValue={crud === null ? 'Loading....' : crud.city} label="City">
                      <Select style={{ width: '100%' }}>
                        <Option value="">Please Select</Option>
                        <Option value="dhaka">Dhaka</Option>
                        <Option value="mymensingh">Mymensingh</Option>
                        <Option value="khulna">Khulna</Option>
                        <Option value="barisal">Barisal</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="company"
                      initialValue={crud === null ? 'Loading....' : crud.company}
                      label="Company"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="position"
                      initialValue={crud === null ? 'Loading....' : crud.position}
                      label="Position"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Joining Date">
                      <DatePicker
                        defaultValue={moment(`${state.join}`, dateFormat)}
                        onChange={onChange}
                        style={{ width: '100%' }}
                        format={dateFormat}
                      />
                    </Form.Item>
                    <Form.Item name="status" initialValue={crud === null ? 'Loading....' : crud.status} label="Status">
                      <Radio.Group>
                        <Radio value="active">Active</Radio>
                        <Radio value="deactivated">Deactivated</Radio>
                        <Radio value="blocked">Blocked</Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Button htmlType="submit" type="primary">
                      {isLoading ? 'Loading...' : 'Update'}
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

export default Edit;
