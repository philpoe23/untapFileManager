import React, { Fragment } from 'react';
import { PageHeader } from '../components/page-headers/page-headers';
import { Cards } from '../components/cards/frame/cards-frame';
import { Row, Col, DatePicker } from 'antd';
import { Main } from './styled';
import Heading from '../components/heading/heading';
import FeatherIcon from 'feather-icons-react';
import { Button } from '../components/buttons/buttons';

const Calendar = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Fragment>
      <PageHeader ghost title="Calendar" />
      <Main>
        <Row gutter={15}>
          <Col md={6}>
            <Button type="secondary">+ Create New Event</Button>
            <br />
            <br />
            <DatePicker onChange={onChange} open={true} inputReadOnly={true} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Cards headless>
              <Heading as="h5">
                My Calendars <FeatherIcon icon="plus" size={14} />
                <ul>
                  <li>Family Events</li>
                  <li>Product Launch</li>
                  <li>Team Meeting</li>
                  <li>UI/UX Tasks</li>
                  <li>Project Update</li>
                </ul>
              </Heading>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Calendar;
