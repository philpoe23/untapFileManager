import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Calendar, Alert } from 'antd';
import moment from 'moment';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Calendars = () => {
  const [state, setState] = useState({
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  });

  const { value, selectedValue } = state;

  const onSelect = value => {
    setState({
      value,
      selectedValue: value,
    });
  };

  const onPanelChange = value => {
    setState({ value });
  };

  return (
    <Fragment>
      <PageHeader title="Calendar" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards title="Basic">
              <Calendar onPanelChange={onPanelChange} />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards title="Notice Calendar">
              <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} />
              </div>
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Selectable Calendar" caption="The simplest use of Calendar">
              <div>
                <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
                <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Calendars;
