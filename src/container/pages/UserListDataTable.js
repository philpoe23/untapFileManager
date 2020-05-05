import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'antd';
import Heading from '../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const UserListDataTable = ({ searchData, users }) => {
  const [state, setState] = useState({
    notdata: searchData,
  });
  let { notdata } = state;

  const handleSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notdata: data,
    });
  };

  const dataSource = [];

  users.map(user => {
    const { id, name, designation, img, status } = user;

    return dataSource.push({
      key: id,
      user: (
        <figure>
          <img style={{ width: '40px' }} src={require('../../' + img)} alt="" />
          <figcaption>
            <Heading as="h6">{name}</Heading>
            <span>San Francisco, CA</span>
          </figcaption>
        </figure>
      ),
      email: 'john@gmail.com',
      company: 'Business Development',
      position: designation,
      joinDate: 'January 20, 2020',
      status: <span className={status}>{status}</span>,
      action: (
        <Fragment>
          <Link to="#">
            <FeatherIcon icon="eye" size={14} />
          </Link>
          <Link to="#">
            <FeatherIcon icon="edit" size={14} />
          </Link>
          <Link to="#">
            <FeatherIcon icon="trash-2" size={14} />
          </Link>
        </Fragment>
      ),
    });
  });

  const columns = [
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
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Fragment>
      <PageHeader
        ghost
        title="User List Data Table | "
        subTitle={
          <Fragment>
            274 Users <AutoComplete onSearch={handleSearch} dataSource={notdata} width="100%" patterns />
          </Fragment>
        }
        buttons={[
          <Button key="1" type="primary">
            + Add New User
          </Button>,
        ]}
      />

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <Table
                rowSelection={rowSelection}
                dataSource={dataSource}
                columns={columns}
                pagination={{
                  defaultPageSize: 5,
                  total: dataSource.length,
                  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
    users: state.users,
  };
};
export default connect(mapStateToProps)(UserListDataTable);
