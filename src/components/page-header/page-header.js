import React, { Fragment } from 'react';
import { PageHeader, Button, Icon } from 'antd';
// import { DateRangePickerOne } from '../date-picker/date-picker';
import PropTypes from 'prop-types';
import { ShareButtonPageHeader } from '../buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../buttons/calendar-button/calendar-button';

const Page_Header = props => {
  const { title, subTitle } = props;
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: '#F4F5F7',
          padding: 24,
        }}
      >
        <PageHeader
          ghost={true}
          onBack={() => window.history.back()}
          title={title}
          subTitle={subTitle}
          extra={[
            <CalendarButtonPageHeader key="1" />,
            <ExportButtonPageHeader key="2" />,
            <ShareButtonPageHeader key="3" />,
            <Button key="4" type="primary">
              <Icon type="plus" />
              Add New
            </Button>,
            // <DateRangePickerOne key="5" />,
          ]}
        />
      </div>
    </Fragment>
  );
};

Page_Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Page_Header;
