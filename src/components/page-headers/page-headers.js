import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PageHeaderStyle } from './style';

const PageHeader = props => {
  const { title, subTitle, routes, buttons, ghost, bgColor } = props;
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: bgColor ? bgColor : '#F4F5F7',
          padding: 24,
        }}
      >
        <PageHeaderStyle
          style={{
            border: '1px solid #F4F5F7',
          }}
          onBack={() => window.history.back()}
          title={title}
          subTitle={subTitle}
          breadcrumb={routes && { routes }}
          extra={buttons}
          ghost={ghost}
        />
      </div>
    </Fragment>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bgColor: PropTypes.string,
  routes: PropTypes.array,
  buttons: PropTypes.array,
  ghost: PropTypes.bool,
};

export { PageHeader };
