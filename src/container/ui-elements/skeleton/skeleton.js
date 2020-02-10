import React, { Fragment } from 'react';
import PageHeader from '../../../components/page-header/page-header';
import { Row, Col, Skeleton } from 'antd';
import { Main } from '../../styled';
import { CardHeadLessFrame } from '../../../components/cards/frame/cards-frame';

const Skeletons = props => {
  return (
    <Fragment>
      <PageHeader title="Skeleton" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardHeadLessFrame title="Basic" caption="The simplest use of Skeleton">
              <Skeleton />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Complex combination" caption="The simplest use of Skeleton">
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </CardHeadLessFrame>
          </Col>
          <Col md={12}>
            <CardHeadLessFrame title="Active Animation" caption="The simplest use of Skeleton">
              <Skeleton active avatar paragraph={{ rows: 4 }} />
            </CardHeadLessFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Skeletons;
