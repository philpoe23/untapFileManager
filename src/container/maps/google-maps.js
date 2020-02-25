import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { CardFreshFrame } from '../../components/cards/frame/cards-frame';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { GoogleMaps } from '../../components/maps/google-maps';
import { mapdata } from '../../config/map/google-maps-styles';
const { map_one_styles, map_style_dark, map_two_styles, map_Three_styles } = mapdata;

const GoogleMap = () => {
  return (
    <Fragment>
      <PageHeader title="Google Maps" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <CardFreshFrame title="Google Map Basic" size="large" more={false}>
              <GoogleMaps />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Google Map Style Light" size="large" more={false}>
              <GoogleMaps mapStyles={map_one_styles} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Google Map Style Dark" size="large" more={false}>
              <GoogleMaps mapStyles={map_style_dark} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Google Map Style Theame Color" size="large" more={false}>
              <GoogleMaps zoom={2} mapStyles={map_Three_styles} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Google Map Style Color" size="large" more={false}>
              <GoogleMaps mapStyles={map_two_styles} />
            </CardFreshFrame>
          </Col>
          <Col md={12}>
            <CardFreshFrame title="Google Map Style Color" size="large" more={false}>
              <GoogleMaps
                mapStyles={map_two_styles}
                zoom={4}
                place={[
                  {
                    id: 1,
                    latitude: '50.797897',
                    longitude: '-1.077641',
                  },
                  {
                    id: 2,
                    latitude: '49.797897',
                    longitude: '-25.9389312',
                  },
                  {
                    id: 3,
                    latitude: '50.2577799',
                    longitude: '-5.077641',
                  },
                ]}
              />
            </CardFreshFrame>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default GoogleMap;
