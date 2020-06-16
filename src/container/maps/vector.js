import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from '../../config/dataService/vector.json';
import theme from '../../config/theme/customize-antd';
const VectorMaps = () => {
  return (
    <Fragment>
      <PageHeader title="Vector Maps" />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards title="World Map" size="large">
              <VectorMap {...worldLowRes} fill={theme['primary-color']} stroke="white" />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default VectorMaps;
