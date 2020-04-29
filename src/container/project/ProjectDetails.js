import React, { Fragment, lazy, Suspense, useEffect } from 'react';
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
    <Fragment>
      <PageHeader
        ghost
        title={
          <div>
            <Heading as="h2">
              {title}
              <Button type="primary">
                <FeatherIcon icon="plus" size="14" /> Add Task
              </Button>
              <Button type="default">
                <FeatherIcon icon="check" size="14" /> Mark as Complete
              </Button>
            </Heading>
          </div>
        }
        buttons={[
          <Link key={1} to="#">
            <FeatherIcon icon="edit-3" size={14} />
            Edit
          </Link>,
          <Link key={2} to="#">
            <FeatherIcon icon="trash-2" size={14} />
            Remove
          </Link>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col md={6}>
            <Cards headless bodyStyle={{ backgroundColor: '#20C997' }}>
              <Heading as="h5">Progress</Heading>
              <Progress percent={84} status="active" />
            </Cards>
            <Cards headless>
              <Row gutter={15}>
                <Col xs={6}>
                  <Link to="#">
                    <FeatherIcon icon="layout" size={30} />
                  </Link>
                </Col>
                <Col xs={18}>
                  <Heading as="h5">47</Heading>
                  <p>Total Task</p>
                </Col>
              </Row>
              <Row gutter={15}>
                <Col xs={6}>
                  <Link to="#">
                    <FeatherIcon icon="layout" size={30} />
                  </Link>
                </Col>
                <Col xs={18}>
                  <Heading as="h5">47</Heading>
                  <p>Total Task</p>
                </Col>
              </Row>
              <Row gutter={15}>
                <Col xs={6}>
                  <Link to="#">
                    <FeatherIcon icon="layout" size={30} />
                  </Link>
                </Col>
                <Col xs={18}>
                  <Heading as="h5">47</Heading>
                  <p>Total Task</p>
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="About Project">
              {content}
              <br />
              <Row gutter={5}>
                <Col md={5}>
                  <Heading as="h6">Project owner</Heading>
                  <p>Peter Jackson</p>
                </Col>
                <Col md={5}>
                  <Heading as="h6">Budget</Heading>
                  <p>$56,700</p>
                </Col>
                <Col md={5}>
                  <Heading as="h6">Start Date</Heading>
                  <p>28 Dec 2019</p>
                </Col>
                <Col md={5}>
                  <Heading as="h6">Deadline</Heading>
                  <p>18 Mar 2020</p>
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={6}>
            <Cards
              title="Users"
              isbutton={
                <Button>
                  <FeatherIcon icon="user-plus" size={14} /> Add Users
                </Button>
              }
            >
              <Row gutter={15}>
                <Col xs={6}>
                  <img style={{ width: '100%' }} src={require(`../../static/img/users/1.png`)} alt="" />
                </Col>
                <Col xs={18}>
                  <Heading as="h5">Meyri Carles</Heading>
                  <p>Ui Designer</p>
                </Col>
              </Row>
              <Row gutter={15}>
                <Col xs={6}>
                  <img style={{ width: '100%' }} src={require(`../../static/img/users/1.png`)} alt="" />
                </Col>
                <Col xs={18}>
                  <Heading as="h5">Meyri Carles</Heading>
                  <p>Ui Designer</p>
                </Col>
              </Row>
              <Row gutter={15}>
                <Col xs={6}>
                  <img style={{ width: '100%' }} src={require(`../../static/img/users/1.png`)} alt="" />
                </Col>
                <Col xs={18}>
                  <Heading as="h5">Meyri Carles</Heading>
                  <p>Ui Designer</p>
                </Col>
              </Row>
              <Row gutter={15}>
                <Col xs={6}>
                  <img style={{ width: '100%' }} src={require(`../../static/img/users/1.png`)} alt="" />
                </Col>
                <Col xs={18}>
                  <Heading as="h5">Meyri Carles</Heading>
                  <p>Ui Designer</p>
                </Col>
              </Row>
            </Cards>
          </Col>
          <Col md={16}>
            <Cards
              title={
                <nav>
                  <NavLink to={{ pathname: match.url, state: [{}] }}>Task List</NavLink> &nbsp; &nbsp;
                  <NavLink to={{ pathname: match.url + '/activities', state: [{}] }}>Activities</NavLink>
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
                  <Route path={match.url + '/:activities'} component={Activities} />
                </Suspense>
              </Switch>
            </Cards>
          </Col>
          <Col md={8}>
            <Cards title="Files">
              <Row></Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
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
