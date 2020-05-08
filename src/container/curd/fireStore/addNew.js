import React, { Fragment } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Form, Input, InputNumber } from 'antd';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fbDataSubmit } from '../../../redux/firestore/actionCreator';

const AddNew = ({ form, fbDataSubmit, isLoading }) => {
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    form.validateFields((err, values) => {
      if (!err) {
        fbDataSubmit({ ...values, id: new Date().getTime() });
        form.resetFields();
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
        title="Add New"
      />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Row>
                <Col md={10} offset={7}>
                  <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <Form.Item label="Name">
                      {getFieldDecorator('name', {})(<Input placeholder="Input Name" />)}
                    </Form.Item>

                    <Form.Item label="Age">
                      {getFieldDecorator(
                        'age',
                        {},
                      )(<InputNumber min={0} style={{ width: '100%' }} placeholder="Input Age" />)}
                    </Form.Item>

                    <Form.Item label="Address">
                      {getFieldDecorator('address', {})(<Input.TextArea rows={4} placeholder="Input Address" />)}
                    </Form.Item>
                    <Button onClick={handleSubmit} type="primary">
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

const mapDispatchToProps = dispatch => {
  return {
    fbDataSubmit: data => dispatch(fbDataSubmit(data)),
  };
};

const mapStateToProps = state => {
  return {
    isLoading: state.crud.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'addNew' })(AddNew));
