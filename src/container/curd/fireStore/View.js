import React, { Fragment, useEffect } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Row, Col, Table, Spin } from 'antd';
import { connect } from 'react-redux';
import { Main } from '../../styled';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { fbDataDelete, fbDataRead } from '../../../redux/firestore/actionCreator';

const ViewPage = ({ crud, fbDataDelete, isLoading, fbDataRead }) => {
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      fbDataRead();
    }
    return () => {
      unmounted = true;
    };
  }, [fbDataRead]);
  const dataSource = [];

  const handleDelete = e => {
    const confirme = window.confirm('Are you sure delete this?');
    if (confirme) {
      fbDataDelete(parseInt(e.currentTarget.getAttribute('data-id')));
    }
    return false;
  };

  crud.length &&
    crud.map(person => {
      const { id, name, email, company, position, status } = person;
      return dataSource.push({
        key: id,
        name,
        email,
        company,
        position,
        status: <p className={status}>{status}</p>,
        action: (
          <Fragment>
            <Link to={'/firestore/edit/' + id}>
              <FeatherIcon icon="edit-2" size={14} />
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link onClick={handleDelete} data-id={id} to="#">
              <FeatherIcon icon="trash-2" size={14} />
            </Link>
          </Fragment>
        ),
      });
    });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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

  return (
    <Fragment>
      <PageHeader
        buttons={[
          <Link to="#" key="1">
            Reset Record
          </Link>,
          <Link to="/firestore/add" key="2">
            Add New Record
          </Link>,
        ]}
        ghost
        title="View All"
      />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              {isLoading ? (
                <div className="spin">
                  <Spin />
                </div>
              ) : (
                <Table pagination={{ pageSize: 10, showSizeChanger: true }} dataSource={dataSource} columns={columns} />
              )}
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    crud: state.crud.data,
    isLoading: state.crud.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fbDataDelete: id => dispatch(fbDataDelete(id)),
    fbDataRead: () => dispatch(fbDataRead()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
