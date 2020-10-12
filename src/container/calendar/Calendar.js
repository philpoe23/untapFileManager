import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import CalenDar from 'react-calendar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Aside, CalendarWrapper } from './Style';
import YearCalendar from './overview/Year';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
  const { events } = useSelector(state => {
    return {
      events: state.Calender.events,
    };
  });
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
              <YearCalendar />
            </Col>
          </Row>
        </CalendarWrapper>
      </Main>
    </>
  );
};

export default Calendars;
