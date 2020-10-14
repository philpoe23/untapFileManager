import React, { useState, useEffect } from 'react';
import { DatePicker, Form, Input, Radio, Select } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';

const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

const AddNewEvent = ({ defaultValue, onHandleAddEvent }) => {
  const [state, setState] = useState({
    startDate: defaultValue,
    endDate: defaultValue,
  });

  useEffect(() => {
    if (defaultValue) {
      setState({
        startDate: defaultValue,
        endDate: defaultValue,
      });
    }
  }, [defaultValue]);

  const [form] = Form.useForm();
  const handleSubmit = values => {
    onHandleAddEvent({
      title: values.title,
      description: values.description,
      date: [moment(state.startDate).format('MM/DD/YYYY'), moment(state.endDate).format('MM/DD/YYYY')],
      time: [values.startTime.format('HH:mm a'), values.endTime.format('HH:mm a')],
      type: values.type,
      label: values.label,
    });
    form.resetFields();
  };
  const onChangeStart = (date, dateString) => {
    setState({ ...state, startDate: dateString });
  };
  const onChangeEnd = (date, dateString) => {
    setState({ ...state, endDate: dateString });
  };
  return (
    <BasicFormWrapper>
      <Form style={{ width: '100%' }} form={form} name="addNewEvent" onFinish={handleSubmit}>
        <Form.Item label="Title" name="title">
          <Input placeholder="Write Your Event Title" />
        </Form.Item>

        <Form.Item initialValue="event" name="type" label="Event Type">
          <Radio.Group>
            <Radio value="event">Event</Radio>
            <Radio value="reminder">Reminder</Radio>
            <Radio value="task">Task</Radio>
          </Radio.Group>
        </Form.Item>

        <DatePicker
          onChange={onChangeStart}
          value={moment(state.startDate, dateFormat)}
          defaultValue={moment(state.startDate, dateFormat)}
        />

        <Form.Item name="startTime" label="">
          <DatePicker picker="time" />
        </Form.Item>

        <DatePicker
          onChange={onChangeEnd}
          value={moment(state.endDate, dateFormat)}
          defaultValue={moment(state.endDate, dateFormat)}
        />

        <Form.Item name="endTime" label="">
          <DatePicker picker="time" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Write Your Description" />
        </Form.Item>

        <Form.Item name="label" initialValue="primary" label="Label">
          <Select style={{ width: '100%' }}>
            <Option value="primary">
              <span className="bullet primary" />
              Primary
            </Option>
            <Option value="secondary">
              <span className="bullet secondary" />
              Secondary
            </Option>
            <Option value="success">
              <span className="bullet success" />
              success
            </Option>
            <Option value="warning">
              <span className="bullet warning" />
              Warning
            </Option>
            <Option value="info">
              <span className="bullet info" />
              Info
            </Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <div className="add-user-bottom text-right">
            <Button
              className="ant-btn ant-btn-light"
              onClick={() => {
                return form.resetFields();
              }}
            >
              Reset
            </Button>
            <Button htmlType="submit" type="primary">
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </BasicFormWrapper>
  );
};

AddNewEvent.propTypes = {
  defaultValue: PropTypes.string,
  onHandleAddEvent: PropTypes.func,
};

export default AddNewEvent;
