import React from 'react';
import { Row, Col, Table, Progress } from 'antd';
import Heading from '../../../components/heading/heading';
import { connect } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';

const List = () => {
  const dataSource = [
    {
      key: '1',
      project: (
        <div>
          <Heading as="h4">Dashboard UI Project</Heading>
          <p>Web Design</p>
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
      status: 'EARLY',
      completion: (
        <div>
          <Progress percent={84} status="active" />
          <p>12/15 Task Completed</p>
        </div>
      ),
    },
  ];

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
    </Row>
  );
};
const mapStateToProps = state => {
  return {
    //productsAll: state.products,
  };
};

export default connect(mapStateToProps)(List);
