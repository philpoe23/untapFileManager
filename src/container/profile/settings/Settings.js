import React, { Fragment, lazy, Suspense } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Row, Col, Upload, Spin } from 'antd';
import { ProfileAuthorBox, SettingWrapper } from './overview/style';
import Heading from '../../../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Profile = lazy(() => import('./overview/Profile'));
const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/Passwoard'));
const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'));

const Settings = ({ match }) => {
  return (
    <Fragment>
      <PageHeader ghost title="Profile Settings" />

      <Main>
        <Row gutter={15}>
          <Col md={5}>
            <ProfileAuthorBox>
              
              <Cards headless>
                <div className="author-info">
                  <figure>
                    <img src={require('../../../static/img/users/1.png')} alt="" />

                    <Upload>
                      <Link to="#">
                        <FeatherIcon icon="camera" size={16} />
                      </Link>
                    </Upload>
                  </figure>
                  <figcaption>
                    <div className="info">
                      <Heading as="h4">Duran Clayton</Heading>
                      <p>UI/UX Designer</p>
                    </div>
                  </figcaption>
                </div>
                <nav className="settings-menmulist">
                  <ul>
                    <li>
                      <NavLink to={match.path + '/profile'}>
                        <FeatherIcon icon="user" size={14} />
                        Edit Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={match.path + '/account'}>
                        <FeatherIcon icon="settings" size={14} />
                        Account Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={match.path + '/password'}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-key"
                        >
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                        </svg>
                        Change Password
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={match.path + '/social'}>
                        <FeatherIcon icon="users" size={14} />
                        Social Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={match.path + '/notification'}>
                        <FeatherIcon icon="bell" size={14} />
                        Notification
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </Cards>
            </ProfileAuthorBox>
          </Col>
          <Col md={19}>
            <SettingWrapper>
              <div className="cover-image">
                <img style={{ width: '100%' }} src={require('../../../static/img/profile/CoverImage.svg')} alt="banner" />
                <Upload>
                  <Link to="#">
                    <FeatherIcon icon="camera" size={16} /> Change Cover
                  </Link>
                </Upload>
              </div>
              <Switch>
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Route path={match.path + '/profile'} component={Profile} />
                  <Route path={match.path + '/account'} component={Account} />
                  <Route path={match.path + '/password'} component={Password} />
                  <Route path={match.path + '/social'} component={SocialProfiles} />
                  <Route path={match.path + '/notification'} component={Notification} />
                </Suspense>
              </Switch>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Settings;
