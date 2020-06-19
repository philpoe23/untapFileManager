import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Progress, Pagination, Tag } from 'antd';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Link } from 'react-router-dom';
import { textRefactor } from '../../../Helper';
import { ProjectCard, ProjectPagination } from '../style';

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
    <Row gutter={25}>
      {projects.length ? (
        projects.map(project => {
          const { id, title, status, content } = project;
          return (
            <Col key={id} md={8}>
              <ProjectCard>
                <Cards headless>
                  <div className="project-title">
                    <h1>
                      <Link to={'/projectDetails/' + id}>{title}</Link>
                      <Tag className={status} color="#f50">
                        {status}
                      </Tag>
                    </h1>
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
                  <p className="project-desc">{textRefactor(content, 13)}</p>
                  <div className="project-timing">
                    <div>
                      <span>Start Date</span>
                      <strong>26 Dec 2019</strong>
                    </div>
                    <div>
                      <span>Deadline</span>
                      <strong>18 Mar 2020</strong>
                    </div>
                  </div>
                  <div className="project-progress">
                    <Progress percent={84} status="primary" />
                    <p>12/15 Task Completed</p>
                  </div>
                  <div className="project-assignees">
                    <p>Assigned To</p>
                    <ul>
                      <li>
                        <img src={require(`../../../static/img/users/1.png`)} alt="" />
                      </li>
                      <li>
                        <img src={require(`../../../static/img/users/2.png`)} alt="" />
                      </li>
                      <li>
                        <img src={require(`../../../static/img/users/3.png`)} alt="" />
                      </li>
                      <li>
                        <img src={require(`../../../static/img/users/4.png`)} alt="" />
                      </li>
                      <li>
                        <img src={require(`../../../static/img/users/5.png`)} alt="" />
                      </li>
                      <li>
                        <img src={require(`../../../static/img/users/6.png`)} alt="" />
                      </li>
                      <li>
                        <img src={require(`../../../static/img/users/7.png`)} alt="" />
                      </li>
                    </ul>
                  </div>
                </Cards>
              </ProjectCard>
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

export default connect(mapStateToProps)(Grid);
