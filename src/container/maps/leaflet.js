import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { LeafletMapBasic, LeafletMapMultipleIcon, LeafletMapCustomIcon, LeafleteMarkerCluster } from '../../components/maps/leaflet';

const place = [
  {
    id: 1,
    position: [50.797897, -1.077641],
  },
  {
    id: 2,
    position: [50.798897, -1.013641],
  },
  {
    id: 3,
    position: [50.7997799, -1.100641],
  },
];

const OsMap = props => {
  return (
    <Fragment>
      <PageHeader title="Openstreet Maps (Leaflet)" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="Leaflet Basic Map" size="large" more={false}>
              <LeafletMapBasic latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={15} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Leaflet Multiple Icon" size="large" more={false}>
              <LeafletMapMultipleIcon data={place} latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={12} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Leaflet Custom Icon" size="large" more={false}>
              <LeafletMapCustomIcon faIcon="fa fa-thumb-tack fa-3x" data={place} latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={12} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Leaflet Cluster Map" size="large" more={false}>
              <LeafleteMarkerCluster faIcon="fa fa-thumb-tack fa-3x" data={place} latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={12} />
            </CardFreshFrame>
          </Col>
          
        </Row>
      </Main>
    </Fragment>
  );
};

export default OsMap;
