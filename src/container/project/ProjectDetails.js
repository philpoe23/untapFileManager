import React, { lazy, Suspense, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { connect } from 'react-redux';
import { Row, Col, Progress, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Heading from '../../components/heading/heading';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterSinglepage } from '../../redux/project/actionCreator';
import { ProjectDetailsWrapper, TaskLists } from './style';

const TaskList = lazy(() => import('./overview/TaskList'));
const Activities = lazy(() => import('./overview/Activities'));

const ProjectDetails = ({ match, project, filterSinglepage }) => {
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      filterSinglepage(parseInt(match.params.id));
    }
    return () => {
      unmounted = true;
    };
  }, [match.params.id, filterSinglepage]);
  const { title, content } = project[0];

  return (
    <ProjectDetailsWrapper>
      <PageHeader
        ghost
        title={
          <div className="project-header">
            <Heading as="h2">{title}</Heading>
            <Button type="primary" size="small">
              <FeatherIcon icon="plus" size="14" /> Add Task
            </Button>
            <Button outlined type="light" size="small">
              <FeatherIcon icon="check" size="14" /> Mark as Complete
            </Button>
          </div>
        }
        buttons={[
          <div className="project-action">
            <Link key={1} to="#" className="project-edit">
              <FeatherIcon icon="edit-3" size={14} />
              Edit
            </Link>
            <Link key={2} to="#" className="project-remove">
              <FeatherIcon icon="trash-2" size={14} />
              Remove
            </Link>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col md={6}>
            <div className="project-progress">
              <h3>Progress</h3>
              <Progress percent={65} status="active" />
            </div>
            <Cards headless>
              <div className="state-single">
                <div className="color-primary">
                  <Link to="#">
                    <FeatherIcon icon="layout" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">47</Heading>
                  <p>Total Task</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  <Link to="#">
                    <FeatherIcon icon="layout" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">34</Heading>
                  <p>Task Completed</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-success">
                  <Link to="#">
                    <FeatherIcon icon="layout" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">$27,500</Heading>
                  <p>Spendings</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                  <Link to="#">
                    <FeatherIcon icon="layout" size={25} />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">250</Heading>
                  <p>Hours Spent</p>
                </div>
              </div>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="About Project">
              <div className="about-content">
                <p>{content}</p>
              </div>
              <div className="about-project">
                <div>
                  <span>Project Owner</span>
                  <p>Peter Jackson</p>
                </div>
                <div>
                  <span>Budget</span>
                  <p>$56,700</p>
                </div>
                <div>
                  <span>Start Date</span>
                  <p className="color-primary">28 Dec 2019</p>
                </div>
                <div>
                  <span>Deadline</span>
                  <p className="color-danger">18 Mar 2020</p>
                </div>
              </div>
            </Cards>
          </Col>
          <Col md={6}>
            <Cards
              title="Users"
              isbutton={
                <Button outlined type="light" size="small">
                  <FeatherIcon icon="user-plus" size={14} /> Add Users
                </Button>
              }
            >
              <div className="project-users">
                <div className="porject-user-single">
                  <div>
                    <img src={require(`../../static/img/users/1.png`)} alt="" />
                  </div>
                  <div>
                    <Heading as="h5">Meyri Carles</Heading>
                    <p>Ui Designer</p>
                  </div>
                </div>
                <div className="porject-user-single">
                  <div>
                    <img src={require(`../../static/img/users/1.png`)} alt="" />
                  </div>
                  <div>
                    <Heading as="h5">Meyri Carles</Heading>
                    <p>Ui Designer</p>
                  </div>
                </div>
                <div className="porject-user-single">
                  <div>
                    <img src={require(`../../static/img/users/1.png`)} alt="" />
                  </div>
                  <div>
                    <Heading as="h5">Meyri Carles</Heading>
                    <p>Ui Designer</p>
                  </div>
                </div>
                <div className="porject-user-single">
                  <div>
                    <img src={require(`../../static/img/users/1.png`)} alt="" />
                  </div>
                  <div>
                    <Heading as="h5">Meyri Carles</Heading>
                    <p>Ui Designer</p>
                  </div>
                </div>
              </div>
            </Cards>
          </Col>
          <Col md={16}>
            <TaskLists>
              <Cards
                title={
                  <nav>
                    <NavLink to={match.url + '/tasklist'}>Task List</NavLink>
                    &nbsp; &nbsp;
                    <NavLink to={match.url + '/activities'}>Activities</NavLink>
                  </nav>
                }
              >
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <Route exact path={match.url} component={TaskList} />
                    <Route path={match.url + '/tasklist'} component={TaskList} />
                    <Route path={match.url + '/activities'} component={Activities} />
                  </Suspense>
                </Switch>
              </Cards>
            </TaskLists>
          </Col>
          <Col md={8}>
            <Cards title="Files">
              <Row></Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </ProjectDetailsWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    filterSinglepage: id => dispatch(filterSinglepage(id)),
  };
};

const mapStateToProps = state => {
  return {
    project: state.project.data,
    // products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
