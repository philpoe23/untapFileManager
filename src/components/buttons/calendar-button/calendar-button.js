import React, { Fragment } from 'react';
import { Icon, Button } from 'antd';
import { PopupWithIcon } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';

const CalendarButtonPageHeader = () => {
  const content = (
    <Fragment>
      <DateRangePickerOne />
    </Fragment>
  );

  return (
    <PopupWithIcon placement="bottomRight" title="Search by Calendar" content={content} trigger="click">
      <Button>
        <Icon type="calendar" />
        Calendar
      </Button>
    </PopupWithIcon>
  );
};

export { CalendarButtonPageHeader };
