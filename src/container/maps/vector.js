import React from 'react';
import { Row, Col } from 'antd';
import { VectorMap } from '@south-paw/react-vector-maps';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import worldLowRes from '../../demoData/vector.json';
import config from '../../config/config';

const { theme } = config;

const VectorMaps = () => {
  return (
    <>
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
    </>
  );
};

export default VectorMaps;
