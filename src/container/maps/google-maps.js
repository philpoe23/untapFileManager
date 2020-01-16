import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';

import { GoogleMapsOne, GoogleMapsTwo, GoogleMapsThree, GoogleMapsFour } from '../../components/maps/google-maps';
const GoogleMaps = props => {
  return (
    <Fragment>
      <PageHeader title="Google Maps" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <CardFreshFrame title="Google Map Style Three" size="large" more={false}>
              <GoogleMapsThree latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={2} />
            </CardFreshFrame>
          </Col>
          <Col md={24}>
            <CardFreshFrame title="Google Map Style One" size="large" more={false}>
              <GoogleMapsOne latitude={50.797897} longitude={-1.077641} width="100%" height="400px" zoom={13} />
            </CardFreshFrame>
          </Col>
          <Col md={24}>
            <CardFreshFrame title="Google Map Style Two" size="large" more={false}>
              <GoogleMapsTwo latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={13} />
            </CardFreshFrame>
          </Col>

          <Col md={24}>
            <CardFreshFrame title="Google Map Multiple Marker" size="large" more={false}>
              <GoogleMapsFour latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={5} />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default GoogleMaps;
