import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GmapWraper } from './map-style';
import { mapdata } from '../../config/map/google-maps-styles';
import PropTypes from 'prop-types';
const place = [
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
];
const { styles, map_one_styles, map_two_styles, map_Three_styles, apiKey } = mapdata;
const GoogleMapsOne = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

  return (
    <GmapWraper width={width} height={height}>
      <Map google={google} style={styles} styles={map_one_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        <Marker position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
      </Map>
    </GmapWraper>
  );
});
GoogleMapsOne.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  google: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

const GoogleMapsTwo = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

  return (
    <GmapWraper width={width} height={height}>
      <Map google={google} style={styles} styles={map_two_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom}>
        <Marker position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
      </Map>
    </GmapWraper>
  );
});
GoogleMapsTwo.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  google: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

const GoogleMapsThree = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

  return (
    <GmapWraper width={width} height={height}>
      <Map google={google} style={styles} styles={map_Three_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        <Marker position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
      </Map>
    </GmapWraper>
  );
});
GoogleMapsThree.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  google: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

const GoogleMapsFour = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

  return (
    <GmapWraper width={width} height={height}>
      <Map google={google} style={styles} styles={map_two_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        {place.map(item => {
          return <Marker position={{ lat: item.latitude, lng: item.longitude }} icon={require(`../../static/img/map/mpc.png`)} />;
        })}
      </Map>
    </GmapWraper>
  );
});
GoogleMapsFour.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  google: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

export { GoogleMapsOne, GoogleMapsTwo, GoogleMapsThree, GoogleMapsFour };
