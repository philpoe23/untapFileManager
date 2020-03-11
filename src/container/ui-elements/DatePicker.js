import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, DatePicker } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import moment from 'moment';
import { DateRangePickerOne, CustomDateRange } from '../../components/datePicker/datePicker';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const DatePickers = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Fragment>
      <PageHeader title="Date Picker" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of Date picker">
              <DatePicker onChange={onChange} />
              <br />
              <MonthPicker onChange={onChange} placeholder="Select month" />
              <br />
              <RangePicker onChange={onChange} />
              <br />
              <WeekPicker onChange={onChange} placeholder="Select week" />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Date Format" caption="The simplest use of Date picker">
              <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
              <br />
              <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
              <br />
              <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
              <br />
              <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Disabled" caption="The simplest use of Date picker">
              <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
              <br />
              <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
              <br />
              <RangePicker
                defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                disabled
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Custom Date Range" caption="The simplest use of Date picker">
              <CustomDateRange />
            </Cards>
          </Col>
          <Col md={15}>
            <Cards headless title="Date Range" caption="The simplest use of Date picker">
              <DateRangePickerOne />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default DatePickers;
