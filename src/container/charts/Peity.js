import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Line } from 'peity-react';

const Peity = () => {
  return (
    <Fragment>
      <PageHeader title="Peity Charts" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="LINE CHART" size="large" more={false}>
              <Line values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]} height={300} width={750} fillColor="none" />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="AREA CHART" size="large" more={false}>
              <Line values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]} height={300} width={750} />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Peity;
