import React, { useEffect, useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Aside } from './Style';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { CalendarWrapper, Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';

const Calendar = () => {
  const [pickerHeight, setPickerHeight] = useState(0);
  useEffect(() => {
    let unmounted = false;
    const height =
      document.querySelector('.ant-picker-dropdown') !== null &&
      document.querySelector('.ant-picker-dropdown').getBoundingClientRect().height;
    if (document.querySelector('.ant-picker-dropdown')) {
      console.log('hello');
    }
    return () => (unmounted = true);
  }, []);
  console.log(pickerHeight);
  return (
    pickerHeight !== 0 && (
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
              <Col md={6}>
                <Aside>
                  <Button type="secondary">
                    <FeatherIcon icon="plus" size={14} /> Create New Event
                  </Button>
                  <div style={{ height: `${pickerHeight + 100}px` }}>
                    <DatePicker
                      dateRender={current => {
                        const style = {};
                        if (current.date() === 1) {
                          style.border = '1px solid #1890ff';
                          style.borderRadius = '50%';
                        }

                        return (
                          <div className="ant-picker-cell-inner" style={style}>
                            {current.date()}
                          </div>
                        );
                      }}
                      open
                    />
                  </div>
                  hello
                </Aside>
              </Col>
            </Row>
          </CalendarWrapper>
        </Main>
      </>
    )
  );
};

export default Calendar;
