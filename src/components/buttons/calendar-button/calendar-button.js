import React, { Fragment } from 'react';
import { Icon, Button } from 'antd';
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';

const CalendarButtonPageHeader = () => {
  const content = (
    <Fragment>
      <DateRangePickerOne />
    </Fragment>
  );

  return (
    <Popover placement="bottomRight" title="Search by Calendar" content={content} trigger="click">
      <Button>
        <Icon type="calendar" />
        Calendar
      </Button>
    </Popover>
  );
};

export { CalendarButtonPageHeader };
