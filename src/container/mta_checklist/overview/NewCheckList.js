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
} from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { RecordFormWrapper, AddEventWrap } from '../style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Main, BasicFormWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';

const newCheckList = () => {
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

  const options = ['Fine', 'Windy', 'Rain'];
  const satOptions = ['Satisfactory', 'Unsatisfactory'];

  const CheckboxGroup = Checkbox.Group;

  const toggleChecked = () => {
    if (checked == true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleSubmit = () => {
    message.warning('No Database is currently linked');
    console.log('Working');
  };

  return (
    <>
      <PageHeader title="New Serviceability Inspection Checklist" />
      <Main>
        <Row gutter={18}>
          <Col xs={24}>
            <BasicFormWrapper>
              <AddEventWrap>
                <Row justify="center">
                  <Col xl={18} md={16} xs={18}>
                    <BasicFormWrapper>
                      <Form
                        className="add-record-form"
                        style={{ width: '100%' }}
                        layout="horizontal"
                        initialValues={{ layout: 'horizontal' }}
                        name="addnew"
                        handleSubmit={handleSubmit}
                      >
                        <Form.Item name="name" label="Reporting Officer">
                          <Input placeholder="Reporting Officer" onChange={handleChangeSiteName} />
                        </Form.Item>

                        <Row>
                          <Col xl={12}>
                            <Form.Item name="date" label="Date">
                              <DatePicker picker="date" />
                            </Form.Item>
                          </Col>
                          <Col xl={12}>
                            <Form.Item name="time" label="Time">
                              <DatePicker picker="time" />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Divider></Divider>
                        <Row justify="center">
                          <Form.Item name="weather_conditions" label="Weather Conditions">
                            <CheckboxGroup
                              options={options}
                              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                            />
                          </Form.Item>
                        </Row>
                        <Divider dashed={true} />

                        <Row xl={24} className="newChecklist" gutter={24} align="top" justify="center">
                          <Col xl={12}>
                            <Divider>Runaway &amp; Taxiway</Divider>
                            <Form.Item name="Debris" label="Debris">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Markings" label="Markings">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Pavement condition" label="Pavement condition">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Surface water" label="Surface water">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Shoulder erosion" label="Shoulder erosion">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>

                            <Divider>Runway and Taxiway Strips</Divider>
                            <Form.Item name="Roughness" label="Roughness">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Obstructions" label="Obstructions">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Grass height" label="Grass height">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Markers" label="Markers">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>

                            <Divider>Apron</Divider>
                            <Form.Item name="Debris" label="Debris">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Fuel/oil spillage" label="Fuel/oil spillage">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Pavement condition" label="Pavement condition">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Markers/markings" label="Markers/markings">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Parking positions" label="Parking positions">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Ground equipment" label="Ground equipment">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Refuelling ops" label="Refuelling ops">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Vehicle control" label="Vehicle control">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                          </Col>

                          <Col xl={12}>
                            <Divider>Lighting</Divider>
                            <Form.Item name="PAL activation" label="PAL activation">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Operation" label="Operation">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Condition" label="Condition">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Clear of grass (visibility)" label="Clear of grass (visibility)">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="	Illuminated Wind Indicator" label="	Illuminated Wind Indicator">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Weekly lighting check" label="Weekly lighting check">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>

                            <Divider>Hazards</Divider>
                            <Form.Item name="Birds" label="Birds (Detail Below)">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Animals" label="Aniamls (Detail Below)">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>

                            <Divider>Fencing</Divider>
                            <Form.Item name="Security/access" label="Security/access">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Signs" label="Signs">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Gates locked and clear" label="Gates locked and clear">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="	Boundary fence condition" label="	Boundary fence condition">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>

                            <Divider>Wind Indicators</Divider>
                            <Form.Item name="	Condition" label="	Condition">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Circle clear and marked" label="Circle clear and marked">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Spare sleeves" label="Spare sleeves">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>

                            <Divider>Signal Area</Divider>
                            <Form.Item name="Circle clear and marked" label="Circle clear and marked">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                            <Form.Item name="Signals available" label="Signals available">
                              <CheckboxGroup options={satOptions} />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Divider />

                        <Row>
                          <Col sm={4} xs={24}>
                            <span className="label">Birds</span>
                          </Col>
                          <Col sm={20} xs={24}>
                            <Form.Item label="Species" name="birds_species">
                              <Input />
                            </Form.Item>
                            <Form.Item label="Quantity" name="birds_qty">
                              <InputNumber />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Divider dashed={true} />
                        <Row>
                          <Col sm={4} xs={24}>
                            <span className="label">Animals</span>
                          </Col>
                          <Col sm={20} xs={24}>
                            <Form.Item label="Species" name="animals_species">
                              <Input />
                            </Form.Item>
                            <Form.Item label="Quantity" name="animals_qty">
                              <InputNumber />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Divider />

                        <Form.Item label="Comments" name="comments">
                          <Input.TextArea />
                        </Form.Item>

                        <div className="record-form-actions text-right">
                          <Checkbox onChange={toggleChecked}>Confirm Inspection?</Checkbox>
                          <Button size="default" htmlType="Save" type="primary" disabled={checked}>
                            Submit Checklist
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

export default newCheckList;
