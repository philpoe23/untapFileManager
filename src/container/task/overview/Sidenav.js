import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Row, Col, Input, Form, Modal } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Button } from '../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../styled';
import { SidebarWrap } from '../style';

const Sidenav = () => {
  const [form] = Form.useForm();
  const { path } = useRouteMatch();

  const [state, setState] = useState({
    visible: false,
    modalType: 'primary',
  });

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  return (
    <>
      <SidebarWrap>
        <div className="sDash_taskApp-sidebar">
          <Button className="sDash_btn-add" size="large" type="primary" raised onClick={showModal}>
            <FeatherIcon icon="plus" size={16} />
            Add Task
          </Button>
          <ul className="sDash_taskApp-sidebar__nav">
            <li className="sDash_taskApp-sidebar__nav--item">
              <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/all`}>
                <span className="nav-item-icon">
                  <FeatherIcon icon="edit" size={16} />
                </span>
                <span className="nav-item-text">All</span>
              </NavLink>
            </li>
            <li className="sDash_taskApp-sidebar__nav--item">
              <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/favourites`}>
                <span className="nav-item-icon">
                  <FeatherIcon icon="star" size={16} />
                </span>
                <span className="nav-item-text">Favourite</span>
              </NavLink>
            </li>
            <li className="sDash_taskApp-sidebar__nav--item">
              <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/completed`}>
                <span className="nav-item-icon">
                  <FeatherIcon icon="check" size={16} />
                </span>
                <span className="nav-item-text">Completed</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </SidebarWrap>
      <Modal
        title="Add Task"
        className="sDash_addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="sDash_addTask-modal-inner">
          <BasicFormWrapper>
            <Form form={form} name="add-task">
              <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                <Input placeholder="Title" />
              </Form.Item>

              <Form.Item name="description">
                <Input.TextArea rows={4} placeholder="Note Description" />
              </Form.Item>
              <div className="sDash-modal-actions">
                <Button size="small" type="white" key="submit" outlined>
                  Cancel
                </Button>
                <Button htmlType="submit" size="small" type="primary" key="submit">
                  Add Task
                </Button>
              </div>
            </Form>
          </BasicFormWrapper>
        </div>
      </Modal>
    </>
  );
};

export { Sidenav };
