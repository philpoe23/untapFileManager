 import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Skeleton } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const Skeletons = () => {
  return (
    <Fragment>
      <PageHeader ghost title="Skeleton" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of Skeleton">
              <Skeleton />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Complex combination" caption="The simplest use of Skeleton">
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Active Animation" caption="The simplest use of Skeleton">
              <Skeleton active avatar paragraph={{ rows: 4 }} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Skeletons;
