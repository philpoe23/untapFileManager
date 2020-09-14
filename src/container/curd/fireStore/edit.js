import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { fbDataUpdate, fbDataSingle } from '../../../redux/firestore/actionCreator';
import Heading from '../../../components/heading/heading';

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
    join: null,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      dispatch(fbDataSingle(parseInt(match.params.id, 10)));
    }
    return () => {
      unmounted = true;
    };
  }, [dispatch, match]);

  const handleSubmit = values => {
    dispatch(
      fbDataUpdate(parseInt(match.params.id, 10), { ...values, join: state.join, id: parseInt(match.params.id, 10) }),
    );
  };

  const onChange = (date, dateString) => {
    setState({ join: dateString });
  };

  return (
    <>
      <PageHeader
        buttons={[
          <Link key="1" to="/admin/firestore/view">
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
                  {crud !== null && (
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
                      <Form.Item name="name" initialValue={crud.name} label="Name">
                        <Input />
                      </Form.Item>
                      <Form.Item initialValue={crud.email} name="email" rules={[{ type: 'email' }]} label="Email">
                        <Input />
                      </Form.Item>
                      <Form.Item name="country" initialValue={crud.country} label="Country">
                        <Select style={{ width: '100%' }}>
                          <Option value="">Please Select</Option>
                          <Option value="bangladesh">Bangladesh</Option>
                          <Option value="india">India</Option>
                          <Option value="pakistan">Pakistan</Option>
                          <Option value="srilanka">Srilanka</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name="city" initialValue={crud.city} label="City">
                        <Select style={{ width: '100%' }}>
                          <Option value="">Please Select</Option>
                          <Option value="dhaka">Dhaka</Option>
                          <Option value="mymensingh">Mymensingh</Option>
                          <Option value="khulna">Khulna</Option>
                          <Option value="barisal">Barisal</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name="company" initialValue={crud.company} label="Company">
                        <Input />
                      </Form.Item>
                      <Form.Item name="position" initialValue={crud.position} label="Position">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Joining Date">
                        <DatePicker
                          defaultValue={moment(`${state.join === null ? crud.join : state.join}`, dateFormat)}
                          onChange={onChange}
                          style={{ width: '100%' }}
                          format={dateFormat}
                        />
                      </Form.Item>
                      <Form.Item name="status" initialValue={crud.status} label="Status">
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
                  )}
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

Edit.propTypes = {
  match: PropTypes.shape(PropTypes.object).isRequired,
};

export default Edit;
