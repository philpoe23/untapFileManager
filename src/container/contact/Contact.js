import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table, Form, Input, Select } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { Action } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper, CardToolbox, BasicFormWrapper } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { UserTableStyleWrapper } from '../pages/style';
import { onStarUpdate, contactDeleteData, contactSearchData, contactAddData } from '../../redux/contact/actionCreator';
import { Dropdown } from '../../components/dropdown/dropdown';
import { Modal } from '../../components/modals/antd-modals';

const { Option } = Select;

const UserListDataTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => {
    return {
      users: state.Contact.data,
    };
  });
  const [form] = Form.useForm();

  const [state, setState] = useState({
    selectedRowKeys: 0,
    selectedRows: 0,
    visible: false,
    modalType: 'primary',
  });

  const handleSearch = searchText => {
    dispatch(contactSearchData(searchText));
  };

  const onHandleDelete = id => {
    const value = users.filter(item => item.id !== id);
    dispatch(contactDeleteData(value));
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleOk = values => {
    onCancel();
    const arrayData = [];
    users.map(data => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(
      contactAddData([
        ...users,
        {
          ...values,
          id: max + 1,
          time: new Date().getTime(),
          stared: false,
        },
      ]),
    );
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  const usersTableData = [];

  users.map(user => {
    const { id, name, designation, img, stared } = user;

    return usersTableData.push({
      key: id,
      user: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../${img}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {name}
            </Heading>
            <span className="user-designation">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      email: 'john@gmail.com',
      company: 'Business Development',
      position: designation,
      phone: '+90014525',
      action: (
        <Action className="table-actions">
          <Button
            onClick={() => dispatch(onStarUpdate(users, id))}
            className="btn-icon"
            type="primary"
            to="#"
            shape="circle"
          >
            <FeatherIcon className={stared ? 'active' : 'deactivate'} icon="star" size={16} />
          </Button>
          <Dropdown
            content={
              <>
                <Link to="#">
                  <span>Edit</span>
                </Link>
                <Link onClick={() => onHandleDelete(id)} to="#">
                  <span>Delete</span>
                </Link>
              </>
            }
            action="click"
          >
            <Button className="btn-icon" type="info" to="#" shape="circle">
              <FeatherIcon icon="more-vertical" size={16} />
            </Button>
          </Dropdown>
        </Action>
      ),
    });
  });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ selectedRowKeys, selectedRows });
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <CardToolbox>
        <PageHeader
          ghost
          title="Contacts"
          subTitle={
            <>
              <AutoComplete
                onSearch={handleSearch}
                // dataSource={notData}
                placeholder="Search by Name"
                width="100%"
                patterns
              />
            </>
          }
          buttons={[
            <Button onClick={showModal} className="btn-add_new" size="default" type="primary" key="1">
              <Link to="#">+ Add New</Link>
            </Button>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <UserTableStyleWrapper>
                <TableWrapper className="table-responsive">
                  <Table
                    rowSelection={rowSelection}
                    dataSource={usersTableData}
                    columns={usersTableColumns}
                    pagination={{
                      defaultPageSize: 5,
                      total: usersTableData.length,
                      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    }}
                  />
                </TableWrapper>
              </UserTableStyleWrapper>
            </Cards>
          </Col>
        </Row>
        <Modal type={state.modalType} title={null} visible={state.visible} footer={null} onCancel={handleCancel}>
          <div className="project-modal">
            <BasicFormWrapper>
              <Form form={form} name="createProject" onFinish={handleOk}>
                <Form.Item
                  rules={[{ required: true, message: 'Please input your note title!' }]}
                  name="title"
                  label="Title"
                >
                  <Input placeholder="Note Title" />
                </Form.Item>

                <Form.Item
                  rules={[{ required: true, message: 'Please input your note description!' }]}
                  name="description"
                  label="Description"
                >
                  <Input.TextArea rows={4} placeholder="Note Description" />
                </Form.Item>
                <Form.Item name="label" initialValue="personal" label="Note Label">
                  <Select style={{ width: '100%' }}>
                    <Option value="personal">Personal</Option>
                    <Option value="work">Work</Option>
                    <Option value="social">Social</Option>
                    <Option value="important">Important</Option>
                  </Select>
                </Form.Item>
                <Button htmlType="submit" size="default" type="primary" key="submit">
                  Add New Note
                </Button>
              </Form>
            </BasicFormWrapper>
          </div>
        </Modal>
      </Main>
    </>
  );
};

export default UserListDataTable;
