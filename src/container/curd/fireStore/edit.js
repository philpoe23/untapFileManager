import React, { Fragment, useEffect } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, InputNumber } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fbDataUpdate, fbDataSingle } from '../../../redux/firestore/actionCreator';

const Edit = ({ match }) => {
  const dispatch = useDispatch();
  const { crud, isLoading } = useSelector(state => {
    return {
      crud: state.singleCrud.data,
      isLoading: state.crud.loading,
    };
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
    dispatch(fbDataUpdate(parseInt(match.params.id), { ...values, id: parseInt(match.params.id) }));
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
                    <Form.Item name="name" initialValue={crud === null ? 'Loading....' : crud.name} label="Name">
                      <Input placeholder="Input Name" />
                    </Form.Item>

                    <Form.Item name="age" initialValue={crud === null ? 'Loading....' : crud.age} label="Age">
                      <InputNumber min={0} style={{ width: '100%' }} placeholder="Input Age" />
                    </Form.Item>

                    <Form.Item
                      name="address"
                      initialValue={crud === null ? 'Loading....' : crud.address}
                      label="Address"
                    >
                      <Input.TextArea rows={4} placeholder="Input Address" />
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
