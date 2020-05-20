import React, { Fragment } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, InputNumber } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fbDataSubmit } from '../../../redux/firestore/actionCreator';

const AddNew = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.crud.loading);

  const [form] = Form.useForm();

  const handleSubmit = values => {
    dispatch(fbDataSubmit({ ...values, id: new Date().getTime() }));
    form.resetFields();
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
                    <Form.Item name="name" label="Name">
                      <Input placeholder="Input Name" />
                    </Form.Item>
                    <Form.Item name="age" label="Age">
                      <InputNumber min={0} style={{ width: '100%' }} placeholder="Input Age" />
                    </Form.Item>
                    <Form.Item name="address" label="Address">
                      <Input.TextArea rows={4} placeholder="Input Address" />
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
