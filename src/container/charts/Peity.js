import React from 'react';
import { Row, Col } from 'antd';
import { Line } from 'peity-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const Peity = () => {
  return (
    <>
      <PageHeader title="Peity Charts" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="LINE CHART" size="large">
              <Line
                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                height={300}
                width={630}
                fillColor="none"
              />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="AREA CHART" size="large">
              <Line values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]} height={300} width={630} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Peity;
