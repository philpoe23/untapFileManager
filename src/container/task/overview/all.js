import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Checkbox, Input, Form, Modal } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { BasicFormWrapper } from '../../styled';
import { TaskListWrap } from '../style';

const all = () => {
  const [form] = Form.useForm();
  const task = useSelector(state => state.Task.data);
  const [state, setState] = useState({
    tasks: task,
    visibile: false,
    taskEditId: '',
  });

  const showModal = id => {
    setState({
      ...state,
      taskEditId: id,
      visible: true,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const { tasks, taskEditId } = state;
  return (
    <TaskListWrap>
      <div className="sDash_tasklist-wrap">
        <div className="sDash_tasklist-head">
          <h2 className="sDash_task-list-title">Task Lists</h2>
        </div>
        <div className="sDash_tasklist-body">
          <ul className="sDash_tasks">
            {tasks.map((item, i) => {
              return (
                <li className="sDash_tasks-item" key={i}>
                  <div className="sDash_tasks-item__content">
                    <div className="sDash_tasks-item__title">
                      <Checkbox>{item.title}</Checkbox>
                    </div>
                    <div className="sDash_tasks-item__text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="sDash_tasks-item__action">
                    <span className="task-favourite">
                      <FeatherIcon icon="star" size={14} />
                    </span>
                    <Dropdown
                      content={
                        <>
                          <Link onClick={() => showModal(item.id)}>
                            <FeatherIcon icon="edit" size={14} />
                            <span>Edit</span>
                          </Link>
                          <Link>
                            <FeatherIcon icon="trash-2" size={14} />
                            <span>Delete</span>
                          </Link>
                        </>
                      }
                    >
                      <Link to="#">
                        <FeatherIcon icon="more-vertical" size={18} />
                      </Link>
                    </Dropdown>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Modal
        title="Edit Task"
        className="sDash_addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="sDash_addTask-modal-inner">
          {tasks
            .filter(item => item.id === taskEditId)
            .map((value, i) => {
              return (
                <BasicFormWrapper>
                  <Form form={form} name="add-task">
                    <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                      <Input placeholder="Title" defaultValue={value.title} />
                    </Form.Item>

                    <Form.Item name="description">
                      <Input.TextArea rows={4} placeholder="Add Description" defaultValue={value.description} />
                    </Form.Item>
                    <div className="sDash-modal-actions">
                      <Button size="small" type="white" key="submit" outlined>
                        Cancel
                      </Button>
                      <Button htmlType="submit" size="small" type="primary" key="submit">
                        Edit
                      </Button>
                    </div>
                  </Form>
                </BasicFormWrapper>
              );
            })}
        </div>
      </Modal>
    </TaskListWrap>
  );
};

export default all;
