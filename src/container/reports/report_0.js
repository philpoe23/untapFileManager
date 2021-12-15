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

const report_0 = () => {
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
    message.success('Fuel Issue and Landing Record Docket Submitted');
    console.log('Working');
    form.resetFields();
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <PageHeader title="Fuel Issue and Landing Record Docket" />
      <Main>
        <Row gutter={18}>
          <Col xs={24}>
            <BasicFormWrapper>
              <AddEventWrap>
                <Row style={centerStyle}>
                  <Col xl={18} md={16} xs={24}>
                    <BasicFormWrapper>
                      <Form
                        className="add-record-form"
                        style={{ width: '100%' }}
                        layout="horizontal"
                        initialValues={{ layout: 'horizontal' }}
                        name="addnew"
                        handleSubmit={handleSubmit}
                      >
                        <Row xl={24}>
                          <Col xl={4} sm={6}>
                            <Form.Item name="VH" label="VH">
                              <Input onChange={handleChangeSiteName} />
                            </Form.Item>
                          </Col>
                          <Col xl={16} sm={10}>
                            <Form.Item name="type" label="Type">
                              <Input onChange={handleChangeSiteName} />
                            </Form.Item>
                          </Col>
                          <Col xl={4} sm={8}>
                            <Form.Item name="fixedwing">
                              <Checkbox>Fixed Wing</Checkbox>
                            </Form.Item>
                            <Form.Item name="rotary wing">
                              <Checkbox style={{ marginLeft: '0px' }}>Rotary Wing</Checkbox>
                            </Form.Item>
                          </Col>
                        </Row>

                        <Form.Item name="operater" label="Operater / user / charterer">
                          <Input onChange={handleChangeSiteName} />
                        </Form.Item>
                        <Form.Item name="airline" label="Ariline or Owner">
                          <Input onChange={handleChangeSiteName} />
                        </Form.Item>

                        {window.innerWidth >= 990 ? (
                          <Row gutter={30} justify="center">
                            <Col xl={6} sm={8}>
                              <Form.Item name="from" label="From">
                                <Input onChange={handleChangeSiteName} />
                              </Form.Item>
                            </Col>
                            <Col xl={6} sm={8}>
                              <Form.Item name="flightNo" label="Flight Number">
                                <Input onChange={handleChangeSiteName} />
                              </Form.Item>
                            </Col>
                            <Col xl={6} sm={8}>
                              <Form.Item name="arrivalDate" label="Arrival Date">
                                <DatePicker onChange={handleChangeSiteName} />
                              </Form.Item>
                            </Col>
                          </Row>
                        ) : (
                          <>
                            <Row gutter={30} justify="center">
                              <Col xl={6} sm={12}>
                                <Form.Item name="from" label="From">
                                  <Input onChange={handleChangeSiteName} />
                                </Form.Item>
                              </Col>
                              <Col xl={6} sm={12}>
                                <Form.Item name="flightNo" label="Flight Number">
                                  <Input onChange={handleChangeSiteName} />
                                </Form.Item>
                              </Col>
                            </Row>
                            <Form.Item name="arrivalDate" label="Arrival Date">
                              <DatePicker onChange={handleChangeSiteName} />
                            </Form.Item>
                          </>
                        )}

                        <Divider dashed={true} />
                        {window.innerWidth >= 990 ? (
                          <Row justify="center" gutter={50}>
                            <Col xl={6}>
                              <Form.Item name="landing_type" label="Landing Type">
                                <CheckboxGroup
                                  options={options}
                                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                />
                              </Form.Item>
                            </Col>
                            <Col xl={6} style={{ display: 'flex' }}>
                              <Form.Item name="arrive" label="">
                                <Input placeholder="Arrive" onChange={handleChangeSiteName} />
                              </Form.Item>
                              <Form.Item name="times" label="">
                                <Input placeholder="Times" onChange={handleChangeSiteName} />
                              </Form.Item>
                              <Form.Item name="depart" label="">
                                <Input placeholder="Depart" onChange={handleChangeSiteName} />
                              </Form.Item>
                            </Col>
                            <Col xl={6}>
                              <Form.Item name="accommodation" label="Accommodation">
                                <CheckboxGroup
                                  options={yesnoOptions}
                                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                />
                              </Form.Item>
                            </Col>
                            <Col xl={6} style={{ display: 'flex' }}>
                              <Form.Item name="crew" label="">
                                <Input placeholder="Crew" onChange={handleChangeSiteName} />
                              </Form.Item>
                              <Form.Item name="pax" label="">
                                <Input placeholder="Pax" onChange={handleChangeSiteName} />
                              </Form.Item>
                              <Form.Item name="other" label="">
                                <Input placeholder="Other" onChange={handleChangeSiteName} />
                              </Form.Item>
                            </Col>
                          </Row>
                        ) : (
                          <>
                            <Row justify="center" gutter={50}>
                              <Col sm={12}>
                                <Form.Item name="landing_type" label="Landing Type">
                                  <CheckboxGroup
                                    options={options}
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                  />
                                </Form.Item>
                              </Col>
                              <Col sm={12} style={{ display: 'flex' }}>
                                <Form.Item name="arrive" label="">
                                  <Input placeholder="Arrive" onChange={handleChangeSiteName} />
                                </Form.Item>
                                <Form.Item name="times" label="">
                                  <Input placeholder="Times" onChange={handleChangeSiteName} />
                                </Form.Item>
                                <Form.Item name="depart" label="">
                                  <Input placeholder="Depart" onChange={handleChangeSiteName} />
                                </Form.Item>
                              </Col>
                            </Row>
                            <Row gutter={50}>
                              <Col sm={12}>
                                <Form.Item name="accommodation" label="Accommodation">
                                  <CheckboxGroup
                                    options={yesnoOptions}
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                  />
                                </Form.Item>
                              </Col>
                              <Col sm={12} style={{ display: 'flex' }}>
                                <Form.Item name="crew" label="">
                                  <Input placeholder="Crew" onChange={handleChangeSiteName} />
                                </Form.Item>
                                <Form.Item name="pax" label="">
                                  <Input placeholder="Pax" onChange={handleChangeSiteName} />
                                </Form.Item>
                                <Form.Item name="other" label="">
                                  <Input placeholder="Other" onChange={handleChangeSiteName} />
                                </Form.Item>
                              </Col>
                            </Row>
                          </>
                        )}

                        <Divider>Fuel</Divider>

                        <Row xl={24} gutter={12}>
                          <Col xl={8}>
                            <Form.Item name="jetA1" label="JetA1">
                              <Input placeholder="Litres" type="number" onChange={handleChangeSiteName} />
                            </Form.Item>
                            <Form.Item name="AVGAS" label="AVGAS">
                              <Input placeholder="Litres" type="number" onChange={handleChangeSiteName} />
                            </Form.Item>
                          </Col>
                          <Col xl={16}>
                            <Form.Item name="jetA1batch" label="">
                              <Input placeholder="Batch Number" type="number" onChange={handleChangeSiteName} />
                            </Form.Item>
                            <Form.Item name="AVGASbatch" label="">
                              <Input placeholder="Batch Number" type="number" onChange={handleChangeSiteName} />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Divider dashed={true} />

                        <Row xl={24} gutter={25}>
                          <Col xl={8}>
                            <Form.Item name="afpi" label="Aircraft Fuel Point Identified">
                              <Input placeholder="Initials" onChange={handleChangeSiteName} />
                            </Form.Item>
                            <Form.Item name="affd" label="After first fueling of day">
                              <Input placeholder="Initials" onChange={handleChangeSiteName} />
                            </Form.Item>
                          </Col>
                          <Col xl={16}>
                            <Row xl={24}>
                              <Col xl={8}>
                                <h1 style={{ marginBottom: '24px' }}>Date and Time of refuelling</h1>
                              </Col>
                              <Col xl={8}>
                                <Form.Item name="refeul_date" style={{ marginBottom: '0px' }}>
                                  <DatePicker onChange={handleChangeSiteName} />
                                </Form.Item>
                                <Form.Item name="refeul_time">
                                  <TimePicker onChange={handleChangeSiteName} />
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Divider>Accommodation and Meals</Divider>
                        <Tooltip title="B = Breakfast; S = Smoke; L = Lunch; N = Night Room; R = Day Room">
                          <span style={{ float: 'right' }}>
                            <FeatherIcon icon="info" />
                          </span>
                        </Tooltip>

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
                                  <Form.Item {...restField} name={[key, 'date']}>
                                    <DatePicker />
                                  </Form.Item>
                                  <Form.Item name="accomodation" name={[key, 'accomodation']}>
                                    <CheckboxGroup options={accommodationOptions} />
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

                        <div className="submit-form">
                          <Checkbox onChange={toggleChecked}>Confirm Completed Docket?</Checkbox>
                          <Button
                            size="default"
                            htmlType="submit"
                            type="primary"
                            disabled={checked}
                            style={{ width: 300 }}
                          >
                            Submit Docket
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
      </Main>
    </>
  );
};

export default report_0;
