/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { Sidenav } from './overview/Sidenav';
import { FixedSidebar } from './style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const All = lazy(() => import('./overview/all'));
const Favourites = lazy(() => import('./overview/favourites'));
const Completed = lazy(() => import('./overview/completed'));

const Task = ({ match }) => {
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });
  const { path } = match;
  const { responsive, collapsed } = state;
  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };
  return (
    <>
      <PageHeader
        title="Task"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={5} lg={6} md={7} xs={24}>
            {responsive > 767 ? (
              <Sidenav />
            ) : (
              <FixedSidebar className={collapsed ? 'show' : 'hide'}>
                <Link to="#" type="link" className="trigger-close" onClick={toggleCollapsed}>
                  <FeatherIcon icon="x" />
                </Link>
                <Sidenav />
              </FixedSidebar>
            )}
          </Col>
          <Col xl={19} lg={18} md={17} xs={24}>
            {responsive <= 767 && (
              <div className="sidebar-trier-wrap text-center mb-30">
                <Button type="link" className="sidebar-trigger" style={{ marginTop: 0 }} onClick={toggleCollapsed}>
                  <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              </div>
            )}
            <Switch>
              <Suspense
                fallback={
                  <div className="spin">
                    <Spin />
                  </div>
                }
              >
                <Route exact path={`${path}/all`} component={All} />
                <Route path={`${path}/favourites`} component={Favourites} />
                <Route path={`${path}/completed`} component={Completed} />
              </Suspense>
            </Switch>
          </Col>
        </Row>
        <span
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          className={collapsed ? 'overlay-dark show' : 'overlay-dark'}
          onClick={toggleCollapsed}
        />
      </Main>
    </>
  );
};

Task.propTypes = {
  match: propTypes.object,
};

export default Task;
