import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Upload,
  Spin,
  message,
  AutoComplete,
  Divider,
  Checkbox,
  Space,
  InputNumber,
  TimePicker,
  Tooltip,
} from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { RecordFormWrapper, AddEventWrap } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main, BasicFormWrapper } from '../styled';
import Heading from '../../components/heading/heading';
import TextArea from 'antd/lib/input/TextArea';

const report_1 = () => {
  const [siteName, setSiteName] = useState('');
  const [address, setAddress] = useState('');
  const [town, setTown] = useState('');
  const [postcode, setPostcode] = useState('');

  const [checked, setChecked] = useState(true);

  const handleChangeSiteName = e => {
    setSiteName(e.target.value);
  };

  const handleChangeAddress = e => {
    setAddress(e.target.value);
  };

  const handleChangeTown = e => {
    setTown(e.target.value);
  };

  const handleChangePostcode = e => {
    setPostcode(e.target.value);
  };

  const [form] = Form.useForm();

  const options = ['Day', 'Night'];
  const yesnoOptions = ['Yes', 'No'];
  const satOptions = ['Satisfactory', 'Unsatisfactory'];
  const accommodationOptions = ['B', 'S', 'L', 'D', 'N', 'R'];

  const CheckboxGroup = Checkbox.Group;

  const toggleChecked = () => {
    if (checked == true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleSubmit = () => {
    message.success('Daily Report Submitted');
    console.log('Working');
    form.resetFields();
  };

  return (
    <>
      <PageHeader title="Daily Report" />
      <Main>
        <Cards headless>
          <Row gutter={18}>
            <Col xs={24}>
              <BasicFormWrapper>
                <AddEventWrap>
                  <Row justify="center" style={{ display: 'flex', alignItems: 'center' }}>
                    <Col xl={24} md={24} xs={24}>
                      <BasicFormWrapper>
                        <Form
                          className="add-record-form"
                          style={{ width: '100%' }}
                          layout="horizontal"
                          initialValues={{ layout: 'horizontal' }}
                          name="addnew"
                          onFinish={handleSubmit}
                        >
                          <h1>Contracted Personnel in camp (not paying guests)</h1>
                          <Form.List name="people">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                      {...restField}
                                      name={[name, 'name']}
                                      fieldKey={[fieldKey, 'name']}
                                      rules={[{ required: true, message: 'Missing name' }]}
                                    >
                                      <Input placeholder="Name" />
                                    </Form.Item>
                                    <FeatherIcon
                                      icon="minus-circle"
                                      onClick={() => remove(name)}
                                      style={{ cursor: 'pointer' }}
                                    />
                                  </Space>
                                ))}
                                <Form.Item>
                                  <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<FeatherIcon icon="plus-circle" />}
                                  >
                                    Add Name
                                  </Button>
                                </Form.Item>
                              </>
                            )}
                          </Form.List>

                          <Divider>Fuel on hand at end of day</Divider>
                          <Row xl={24}>
                            <Col xl={6} md={6} sm={12} xs={24}>
                              <p style={{ textAlign: 'center' }}>Stock on hand</p>
                              <Form.Item name="jet" style={{ marginBottom: '0px' }} label="Jet">
                                <Input placeholder="Jet" />
                              </Form.Item>
                              <Form.Item name="avgas" style={{ marginBottom: '0px' }} label="Avgas">
                                <Input placeholder="Avgas" />
                              </Form.Item>
                              <Form.Item name="diesel" label="Diesel">
                                <Input placeholder="Diesel" />
                              </Form.Item>
                            </Col>
                            <Col xl={6} md={6} sm={24} xs={24}>
                              <p style={{ textAlign: 'center' }}>Days since barge</p>
                              <Form.Item name="days_since_barge">
                                <InputNumber />
                              </Form.Item>
                            </Col>
                            <Col xl={8} md={6} sm={24} xs={24}>
                              <Form.Item name="barge_name" style={{ marginBottom: '0px' }}>
                                <Input placeholder="Barge Name" />
                              </Form.Item>
                              <Form.Item name="barge_name">
                                <Input placeholder="Delivery Docket Number" />
                              </Form.Item>
                            </Col>
                            <Col xl={6} md={6} sm={24} xs={24}>
                              <p style={{ textAlign: 'center' }}>Quantity</p>
                              <Form.Item name="q0" style={{ marginBottom: '0px' }}>
                                <InputNumber />
                              </Form.Item>
                              <Form.Item name="q1" style={{ marginBottom: '0px' }}>
                                <InputNumber />
                              </Form.Item>
                              <Form.Item name="q2">
                                <InputNumber />
                              </Form.Item>
                            </Col>
                          </Row>
                          {window.innerWidth >= 990 ? (
                            <Row xl={24} gutter={25}>
                              <Col xl={8}>
                                <Form.Item name="barge_name" label="Diesel used in plant today">
                                  <InputNumber />
                                </Form.Item>
                              </Col>
                              <Col xl={8}>
                                <Form.Item name="barge_name" label="Diesel used today by customers">
                                  <InputNumber />
                                </Form.Item>
                              </Col>
                              <Col xl={8}>
                                <Form.Item name="barge_name" label="Diesel used in generation today">
                                  <InputNumber />
                                </Form.Item>
                              </Col>
                            </Row>
                          ) : (
                            <>
                              <Row sm={24} md={24} xs={24}>
                                <Form.Item name="barge_name" label="Diesel used in plant today">
                                  <InputNumber />
                                </Form.Item>
                              </Row>
                              <Row sm={24} md={24} xs={24}>
                                <Form.Item name="barge_name" label="Diesel used today by customers">
                                  <InputNumber />
                                </Form.Item>
                              </Row>
                              <Row sm={24} md={24} xs={24}>
                                <Form.Item name="barge_name" label="Diesel used in generation today">
                                  <InputNumber />
                                </Form.Item>
                              </Row>
                            </>
                          )}

                          <Form.Item name="weather" label="Weather" className="vertical-label">
                            <Input.TextArea className="vertical-label" />
                          </Form.Item>
                          <Form.Item name="aircraft_movements" label="Aircraft Movements" className="vertical-label">
                            <Input.TextArea />
                          </Form.Item>

                          <Row xl={16} style={{ float: 'right' }}>
                            <Form.Item name="aircraft_movements" label="Days since last Lost Time Incident">
                              <InputNumber />
                            </Form.Item>
                          </Row>

                          <Divider>Activities</Divider>

                          <Form.Item>
                            <Input.TextArea style={{ height: '250px' }} />
                          </Form.Item>

                          <Divider dashed={true} />

                          <div className="submit-form">
                            <Checkbox
                              onChange={toggleChecked}
                              style={{ display: 'flex', alignItems: 'center', paddingBottom: 5 }}
                            >
                              Confirm All Details are correct?
                            </Checkbox>
                            <Button
                              size="default"
                              htmlType="submit"
                              type="primary"
                              disabled={checked}
                              style={{ width: 300 }}
                            >
                              Submit Daily Report
                            </Button>
                          </div>
                        </Form>
                      </BasicFormWrapper>
                    </Col>
                  </Row>
                </AddEventWrap>
              </BasicFormWrapper>
            </Col>
          </Row>
        </Cards>
      </Main>
    </>
  );
};

export default report_1;
