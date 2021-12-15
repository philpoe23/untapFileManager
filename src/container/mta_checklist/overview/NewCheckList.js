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

import firebase from '../../../config/api/firebase';

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

  const handleSubmit = values => {
    message.success('Form Saved');
    console.log('Working');
    console.log(values);

    const firebaseRef = firebase.database().ref('ServiceabilityInspectionChecklist');
    const checklist = {
      weatherConditions: values.weather_conditions,
    };

    firebaseRef.push(checklist);
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <PageHeader title="New Serviceability Inspection Checklist" />
      <Main>
        <Row gutter={18}>
          <Col xs={24}>
            <BasicFormWrapper>
              <AddEventWrap>
                <Row style={centerStyle}>
                  <Col xl={18} md={16} xs={18}>
                    <BasicFormWrapper>
                      <Form
                        className="add-record-form"
                        style={{ width: '100%' }}
                        layout="horizontal"
                        initialValues={{ layout: 'horizontal' }}
                        name="addnew"
                        onFinish={handleSubmit}
                      >
                        <Form.Item name="name" label="ReportingOfficer">
                          <Input placeholder="Reporting Officer" onChange={handleChangeSiteName} />
                        </Form.Item>

                        <Row sm={24}>
                          <Col xl={12} sm={12}>
                            <Form.Item name="date" label="Date">
                              <DatePicker picker="date" />
                            </Form.Item>
                          </Col>
                          <Col xl={12} sm={12}>
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

                        {window.innerWidth >= 960 ? (
                          <Row xl={24} className="newChecklist" gutter={24} align="top" justify="center">
                            <Col xl={12}>
                              <Divider>Runaway &amp; Taxiway</Divider>
                              <Form.Item name="Debris" label="Debris">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Markings" label="Markings">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Pavementcondition" label="Pavement condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Surfacewater" label="Surface water">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Shouldererosion" label="Shoulder erosion">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider>Runway and Taxiway Strips</Divider>
                              <Form.Item name="Roughness" label="Roughness">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Obstructions" label="Obstructions">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Grassheight" label="Grass height">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Markers" label="Markers">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider>Apron</Divider>
                              <Form.Item name="Debris" label="Debris">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Fuel/oilspillage" label="Fuel/oil spillage">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Pavementcondition" label="Pavement condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Markers/markings" label="Markers/markings">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Parkingpositions" label="Parking positions">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Groundequipment" label="Ground equipment">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Refuellingops" label="Refuelling ops">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Vehiclecontrol" label="Vehicle control">
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
                              <Form.Item name="Gateslockedandclear" label="Gates locked and clear">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="	Boundaryfencecondition" label="	Boundary fence condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider>Wind Indicators</Divider>
                              <Form.Item name="	Condition" label="	Condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Circleclearandmarked" label="Circle clear and marked">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Sparesleeves" label="Spare sleeves">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider>Signal Area</Divider>
                              <Form.Item name="Circleclearandmarked" label="Circle clear and marked">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Signalsavailable" label="Signals available">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                            </Col>
                          </Row>
                        ) : (
                          <>
                            <Row xl={24} style={{ display: 'block' }} justify="center">
                              <Divider style={{ marginTop: '50px' }}>Runaway &amp; Taxiway</Divider>
                              <Form.Item name="Debris" label="Debris">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Markings" label="Markings">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Pavementcondition" label="Pavement condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Surfacewater" label="Surface water">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Shouldererosion" label="Shoulder erosion">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider style={{ marginTop: '50px' }}>Runway and Taxiway Strips</Divider>
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

                              <Divider style={{ marginTop: '50px' }}>Apron</Divider>
                              <Form.Item name="Debris" label="Debris">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Fuel_oil_spillage" label="Fuel/oil spillage">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Pavement_condition" label="Pavement condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Markers_markings" label="Markers/markings">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Parking_positions" label="Parking positions">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Ground_equipment" label="Ground equipment">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Refuelling_ops" label="Refuelling ops">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Vehicle_control" label="Vehicle control">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Divider>Lighting</Divider>
                              <Form.Item name="PAL_activation" label="PAL activation">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Operation" label="Operation">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Condition" label="Condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Clear_of_grass" label="Clear of grass (visibility)">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="	Illuminated_Wind_Indicator" label="	Illuminated Wind Indicator">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Weekly_lighting_check" label="Weekly lighting check">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider style={{ marginTop: '50px' }}>Hazards</Divider>
                              <Form.Item name="Birds" label="Birds (Detail Below)">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Animals" label="Aniamls (Detail Below)">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider style={{ marginTop: '50px' }}>Fencing</Divider>
                              <Form.Item name="Security_access" label="Security/access">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Signs" label="Signs">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Gates_locked" label="Gates locked and clear">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="	Boundary_fence_condition" label="	Boundary fence condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider style={{ marginTop: '50px' }}>Wind Indicators</Divider>
                              <Form.Item name="	Condition" label="	Condition">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Wind_Circle_clear" label="Circle clear and marked">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Wind_Spare_sleeves" label="Spare sleeves">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>

                              <Divider style={{ marginTop: '50px' }}>Signal Area</Divider>
                              <Form.Item name="Signal_Circle_clear" label="Circle clear and marked">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                              <Form.Item name="Signals_available" label="Signals available">
                                <CheckboxGroup options={satOptions} />
                              </Form.Item>
                            </Row>
                          </>
                        )}

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

                        <div className="record-form-actions submit-form">
                          <Checkbox onChange={toggleChecked}>Confirm Inspection?</Checkbox>
                          <Button
                            size="default"
                            htmlType="submit"
                            type="primary"
                            disabled={checked}
                            style={{ width: 300 }}
                          >
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
