import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination } from 'antd';
import Heading from '../../../components/heading/heading';
import { connect } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Link } from 'react-router-dom';

const List = props => {
  const [state, setState] = useState({
    projects: props.projects,
  });

  const { projects } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        projects: props.projects,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [props]);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    console.log(current, pageSize);
  };

  const dataSource = [];

  projects.length &&
    projects.map(project => {
      const { id, title, status, category } = project;
      return dataSource.push({
        key: id,
        project: (
          <div>
            <Link to="/projectDetails/1">
              <Heading as="h4">{title}</Heading>
            </Link>
            <p>{category}</p>
          </div>
        ),
        startDate: '26 Dec 2019',
        deadline: '18 Mar 2020',
        assigned: (
          <div>
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/6.png`)} alt="" />
            <img style={{ width: '35px' }} src={require(`../../../static/img/users/7.png`)} alt="" />
          </div>
        ),
        status: status,
        completion: (
          <div>
            <Progress percent={84} status="active" />
            <p>12/15 Task Completed</p>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Assigned To',
      dataIndex: 'assigned',
      key: 'assigned',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Completion',
      dataIndex: 'completion',
      key: 'completion',
    },
  ];

  return (
    <Row gutter={15}>
      <Col md={24}>
        <Cards headless>
          <Table pagination={false} dataSource={dataSource} columns={columns} />
        </Cards>
      </Col>
      <Col md={24}>
        {projects.length ? (
          <Pagination
            onChange={onHandleChange}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            pageSize={10}
            defaultCurrent={1}
            total={40}
          />
        ) : null}
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects.data,
  };
};

export default connect(mapStateToProps)(List);
