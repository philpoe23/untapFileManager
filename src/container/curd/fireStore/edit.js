import React, { Fragment, useEffect } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, InputNumber } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fbDataUpdate, fbDataSingle } from '../../../redux/firestore/actionCreator';

const Edit = ({ form, fbDataUpdate, isLoading, match, fbDataSingle, crud }) => {
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      fbDataSingle(parseInt(match.params.id));
    }
    return () => {
      unmounted = true;
    };
  }, [fbDataSingle, match]);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    form.validateFields((err, values) => {
      if (!err) {
        fbDataUpdate(parseInt(match.params.id), { ...values, id: parseInt(match.params.id) });
      }
    });
  };
  const { getFieldDecorator } = form;

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
                  <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <Form.Item label="Name">
                      {getFieldDecorator('name', {
                        initialValue: crud === null ? 'Loading....' : crud.name,
                      })(<Input placeholder="Input Name" />)}
                    </Form.Item>

                    <Form.Item label="Age">
                      {getFieldDecorator('age', {
                        initialValue: crud === null ? 'Loading....' : crud.age,
                      })(<InputNumber min={0} style={{ width: '100%' }} placeholder="Input Age" />)}
                    </Form.Item>

                    <Form.Item label="Address">
                      {getFieldDecorator('address', {
                        initialValue: crud === null ? 'Loading....' : crud.address,
                      })(<Input.TextArea rows={4} placeholder="Input Address" />)}
                    </Form.Item>
                    <Button onClick={handleSubmit} type="primary">
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

const mapDispatchToProps = dispatch => {
  return {
    fbDataUpdate: (id, data) => dispatch(fbDataUpdate(id, data)),
    fbDataSingle: id => dispatch(fbDataSingle(id)),
  };
};

const mapStateToProps = state => {
  return {
    crud: state.singleCrud.data,
    isLoading: state.crud.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'edit' })(Edit));
