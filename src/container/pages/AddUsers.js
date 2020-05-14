import React, { Fragment, lazy, Suspense, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col, Spin } from 'antd';
import { Main } from '../styled';
import { Switch, Route, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Info = lazy(() => import('./overview/info'));
const Work = lazy(() => import('./overview/work'));
const Social = lazy(() => import('./overview/Social'));

const AddNew = ({ match, history }) => {
  const [state, setState] = useState({
    info: {},
    work: {},
    social: {},
  });

  return (
    <Fragment>
      <PageHeader ghost title="Add User" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards
              title={
                <div className="card-nav">
                  <ul>
                    <li>
                      <NavLink to={match.path}>
                        <FeatherIcon icon="user" size={14} />
                        Personal Info
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={match.path + '/work'}>
                        <FeatherIcon icon="briefcase" size={14} />
                        Work Info
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={match.path + '/social'}>
                        <FeatherIcon icon="share-2" size={14} />
                        Social
                      </NavLink>
                    </li>
                  </ul>
                </div>
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
                  <Route exact path={match.path} component={Info} />
                  <Route path={match.path + '/work'} component={Work} />
                  <Route path={match.path + '/social'} component={Social} />
                </Suspense>
              </Switch>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default AddNew;
