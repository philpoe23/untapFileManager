import React, { useState, useEffect } from 'react';
import { Button } from '../../../components/buttons/buttons';
import { Modal } from '../../../components/modals/antd-modals';
import { Form, Input, Select, Col, Row, DatePicker } from 'antd';
import { CheckboxGroup } from '../../../components/checkbox/checkbox';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';
const CreateProject = ({ visible, onCancel, form }) => {
  const [state, setState] = useState({
    visible: visible,
    modalType: 'primary',
    checked: [],
  });

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        visible: visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  const handleOk = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onCancel();
      }
    });
  };

  const handleCancel = e => {
    onCancel();
  };

  const options = [
    {
      label: 'Privet',
      value: 'privet',
    },
    {
      label: 'Team',
      value: 'team',
    },
    {
      label: 'Public',
      value: 'public',
    },
  ];

  const { getFieldDecorator } = form;
  return (
    <Modal
      type={state.modalType}
      title="Create Project"
      visible={state.visible}
      footer={[
        <Button type="primary" key="submit" onClick={handleOk}>
          Add New Project
        </Button>,
        <Button type="default" key="back" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
      onCancel={handleCancel}
    >
      <Form onSubmit={handleOk}>
        <Form.Item label="">{getFieldDecorator('project', {})(<Input placeholder="Project Name" />)}</Form.Item>
        <Form.Item label="">
          {getFieldDecorator('category', {
            initialValue: '',
          })(
            <Select style={{ width: '100%' }}>
              <Option value="">Project Category</Option>
              <Option value="one">Project One</Option>
              <Option value="two">Project Two</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="">
          {getFieldDecorator('description', {})(<Input.TextArea rows={4} placeholder="Project Description" />)}
        </Form.Item>
        <Form.Item label="Project Privacy">
          {getFieldDecorator('pricacy', {
            initialValue: ['team'],
          })(<CheckboxGroup options={options} />)}
        </Form.Item>
        <Form.Item label="Project Members">
          {getFieldDecorator('members', {})(<Input placeholder="Search Members" />)}
        </Form.Item>
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
        <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
        <Row gutter={15}>
          <Col md={12}>
            <Form.Item label="Start Date">
              {getFieldDecorator('start', {})(<DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />)}
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item label="End Date">
              {getFieldDecorator('end', {})(<DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default Form.create({ name: 'createProject' })(CreateProject);
