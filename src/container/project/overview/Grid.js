import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Progress, Pagination } from 'antd';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Link } from 'react-router-dom';
import { textRefactor } from '../../../Helper';

const Grid = props => {
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

  return (
    <Row gutter={15}>
      {projects.length ? (
        projects.map(project => {
          const { id, title, status, content } = project;
          return (
            <Col key={id} md={8}>
              <Cards
                headless
                title={
                  <div>
                    <Heading as="h4">
                      <Link to={'/projectDetails/' + id}>
                        {title} <small>{status}</small>
                      </Link>
                    </Heading>
                    <Dropdown
                      content={
                        <Fragment>
                          <Link to="#">More One</Link>
                          <Link to="#">More Tow</Link>
                          <Link to="#">More Three</Link>
                          <Link to="#">More Four</Link>
                        </Fragment>
                      }
                    >
                      <Link to="#">
                        <FeatherIcon icon="more-horizontal" size={18} />
                      </Link>
                    </Dropdown>
                  </div>
                }
              >
                <p>{textRefactor(content, 13)}</p>
                <Row>
                  <Col md={6}>
                    <Heading as="h6">Start Date</Heading>
                    <p>26 Dec 2019</p>
                  </Col>
                  <Col md={6}>
                    <Heading as="h6">Deadline</Heading>
                    <p>18 Mar 2020</p>
                  </Col>
                </Row>
                <Progress percent={84} status="active" />
                <p>12/15 Task Completed</p>
                <hr />
                <p>Assigned To</p>
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/1.png`)} alt="" />
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/2.png`)} alt="" />
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/3.png`)} alt="" />
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/4.png`)} alt="" />
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/5.png`)} alt="" />
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/6.png`)} alt="" />
                <img style={{ width: '35px' }} src={require(`../../../static/img/users/7.png`)} alt="" />
              </Cards>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <Cards headless>
            <Heading>Data Not Found!</Heading>
          </Cards>
        </Col>
      )}
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

export default connect(mapStateToProps)(Grid);
