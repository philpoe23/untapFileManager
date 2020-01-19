import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from '../../config/dataService/vector.json';
import theme from '../../config/theme/customize-antd';
const VectorMaps = props => {
  return (
    <Fragment>
      <PageHeader title="Vector Maps" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardFreshFrame title="World Map" size="large" more={false}>
              <VectorMap {...worldLowRes} fill={theme['primary-color']} stroke="white" />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default VectorMaps;
