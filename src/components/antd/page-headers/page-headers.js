import React, { Fragment } from 'react';
import { PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';

const PageHeaderone = props => {
  const { title, subTitle } = props;
  return (
    <Fragment>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => null}
        title={title}
        subTitle={subTitle}
      />
    </Fragment>
  );
};

PageHeaderone.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

const PageHeaderTwo = props => {
  const { title, subTitle, routes } = props;

  return (
    <Fragment>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => null}
        breadcrumb={{ routes }}
        title={title}
        subTitle={subTitle}
      />
    </Fragment>
  );
};

const PageHeaderThree = props => {
  const { title, subTitle, routes } = props;

  return (
    <Fragment>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => null}
        breadcrumb={{ routes }}
        title={title}
        subTitle={subTitle}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      />
    </Fragment>
  );
};

export { PageHeaderone, PageHeaderTwo, PageHeaderThree };
