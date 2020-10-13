import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import CalenDar from 'react-calendar';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Aside, CalendarWrapper } from './Style';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import 'react-calendar/dist/Calendar.css';

const YearCalendar = lazy(() => import('./overview/Year'));
const MonthCalendar = lazy(() => import('./overview/Month'));
const WeekCalendar = lazy(() => import('./overview/Week'));
const DayCalendar = lazy(() => import('./overview/Day'));
const TodayCalendar = lazy(() => import('./overview/Today'));

const Calendars = () => {
  const { events } = useSelector(state => {
    return {
      events: state.Calender.events,
    };
  });

  const { path } = useRouteMatch();
  const [state, setState] = useState({
    date: new Date(),
  });

  const onChange = date => setState({ date });

  return (
    <>
      <PageHeader
        ghost
        title="Calendar"
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
        <CalendarWrapper>
          <Row gutter={25}>
            <Col md={5}>
              <Aside>
                <Button type="secondary">
                  <FeatherIcon icon="plus" size={14} /> Create New Event
                </Button>
                <br />
                <br />
                <CalenDar next2Label={null} prev2Label={null} onChange={onChange} value={state.date} />
                <br />
                <Cards headless>
                  <h3 className="listHeader">
                    My Calendars
                    <Link to="#">
                      <FeatherIcon icon="plus" size={14} />
                    </Link>
                  </h3>
                  <ul className="eventList">
                    {events.map(event => {
                      const { id, title, label } = event;
                      return (
                        <li key={id}>
                          <Link to="#">
                            <span className={`bullet ${label}`} />
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Cards>
              </Aside>
            </Col>
            <Col md={18}>
              <Switch>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton paragraph={{ rows: 15 }} active />
                    </Cards>
                  }
                >
                  <Route path={`${path}/year`} component={YearCalendar} />
                  <Route path={`${path}/month`} component={MonthCalendar} />
                  <Route path={`${path}/week`} component={WeekCalendar} />
                  <Route path={`${path}/day`} component={DayCalendar} />
                  <Route path={`${path}/today`} component={TodayCalendar} />
                </Suspense>
              </Switch>
            </Col>
          </Row>
        </CalendarWrapper>
      </Main>
    </>
  );
};

export default Calendars;
