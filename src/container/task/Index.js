import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Link, useRouteMatch, Switch, Route, NavLink } from 'react-router-dom';
import { Row, Col, Input, Form, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { Sidenav } from './overview/Sidenav';
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
  const { path } = match;
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
          <Col lg={5}>
            <Sidenav />
          </Col>
          <Col lg={19}>
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
      </Main>
    </>
  );
};

Task.propTypes = {
  match: propTypes.object,
};

export default Task;
