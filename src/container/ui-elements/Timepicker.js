import React, { Fragment, useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, TimePicker, Button } from 'antd';
import moment from 'moment';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
const format = 'HH:mm';
const TimePickers = () => {
  const [state, setState] = useState({ open: false });

  const handleOpenChange = open => {
    setState({ open });
  };
  const handleClose = () => setState({ open: false });

  return (
    <Fragment>
      <PageHeader title="Time picker" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Time picker">
              <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Disebled" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="interval option" caption="The simplest use of Time picker">
              <TimePicker minuteStep={15} secondStep={10} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="12 hours" caption="The simplest use of Time picker">
              <TimePicker use12Hours />
              <TimePicker use12Hours format="h:mm:ss A" />
              <TimePicker use12Hours format="h:mm a" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Three Size" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Hours and minute" caption="The simplest use of Time picker">
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Addon" caption="The simplest use of Time picker">
              <TimePicker
                open={state.open}
                onOpenChange={handleOpenChange}
                addon={() => (
                  <Button size="small" type="primary" onClick={handleClose}>
                    Ok
                  </Button>
                )}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default TimePickers;
