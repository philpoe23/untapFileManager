import React from 'react';
import { Row, Col, Form, Input, Button, Card, Checkbox } from 'antd';
import { HorizontalForm } from './overview/HorizontalForm';
import { HorizontalIconForm } from './overview/HorizontalIconForm';
import { VerticalForm } from './overview/VerticalForm';
import { VerticalIconForm } from './overview/VerticalIconForm';
import { MultiColumnForm } from './overview/MultiColumnForm';
import { FormValidationWrap, VerticalFormStyleWrap } from './overview/Style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

const FormValidation = () => {
  function onChange(e) {}
  return (
    <>
      <PageHeader ghost title="Form Validation" />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <Card title="Client Side Validation">
                  <Form name="sDash_vertical-form" layout="vertical">
                    <Row gutter={30}>
                      <Col lg={8}>
                        <Form.Item name="f-name" initialValue="Duran" label="First Name">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={8}>
                        <Form.Item name="f-name" initialValue="Duran" label="Last Name">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={8}>
                        <Form.Item name="username" initialValue="Duran" label="Username">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item name="username" initialValue="Duran" label="Username">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={6}>
                        <Form.Item name="username" initialValue="Duran" label="Username">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={6}>
                        <Form.Item name="username" initialValue="Duran" label="Username">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div className="sDash_agree-check">
                      <Checkbox onChange={onChange}>Agree to terms and conditions</Checkbox>
                    </div>
                    <div className="sDash_form-action">
                      <Button className="btn-signin" type="primary" size="large">
                        Submit Form
                      </Button>
                    </div>
                  </Form>
                </Card>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormValidation;
