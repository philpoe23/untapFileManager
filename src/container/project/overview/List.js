import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination } from 'antd';
import Heading from '../../../components/heading/heading';
import { connect } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Link } from 'react-router-dom';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';

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
          <ProjectListTitle>
            <Link to="/projectDetails/1">
              <Heading as="h4">{title}</Heading>
            </Link>
            <p>{category}</p>
          </ProjectListTitle>
        ),
        startDate: (<span className="date-started">26 Dec 2019</span>),
        deadline: (<span className="date-finished">18 Mar 2020</span>),
        assigned: (
          <ProjectListAssignees>
            <ul>
              <li><img src={require(`../../../static/img/users/1.png`)} alt="" /></li>
              <li><img src={require(`../../../static/img/users/2.png`)} alt="" /></li>
              <li><img src={require(`../../../static/img/users/3.png`)} alt="" /></li>
              <li><img src={require(`../../../static/img/users/4.png`)} alt="" /></li>
              <li><img src={require(`../../../static/img/users/5.png`)} alt="" /></li>
              <li><img src={require(`../../../static/img/users/6.png`)} alt="" /></li>
              <li><img src={require(`../../../static/img/users/7.png`)} alt="" /></li>
            </ul>
          </ProjectListAssignees>
        ),
        status: status,
        completion: (
          <div className="project-list-progress">
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
    <Row gutter={25}>
      <Col md={24}>
        <Cards headless>
          <ProjectList>
            <div className="table-responsive">
              <Table pagination={false} dataSource={dataSource} columns={columns} />
            </div>
          </ProjectList>
        </Cards>
      </Col>
      <Col md={24} className="pb-30">
        <ProjectPagination>
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
        </ProjectPagination>
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
