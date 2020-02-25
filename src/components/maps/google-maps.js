import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { GmapWraper } from './map-style';
import PropTypes from 'prop-types';

const apiKey = 'AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c';
const GoogleMaps = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom, mapStyles, place, styles, infoWindow } = props;
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker, e) =>
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onMapClicked = () => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  const onInfoWindowClose = () => {
    setState({
      showingInfoWindow: false,
    });
  };

  return (
    <GmapWraper width={width} height={height}>
      <Map onClick={onMapClicked} styles={mapStyles} google={google} style={styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        {place !== undefined ? (
          place.map((item, key) => {
            return <Marker key={key + 1} onClick={onMarkerClick} position={{ lat: item.latitude, lng: item.longitude }} icon={require(`../../static/img/map/mpc.png`)} />;
          })
        ) : (
          <Marker onClick={onMarkerClick} position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
        )}
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          {infoWindow}
        </InfoWindow>
      </Map>
    </GmapWraper>
  );
});
GoogleMaps.defaultProps = {
  latitude: 50.797897,
  longitude: -1.077641,
  width: '100%',
  height: '600px',
  zoom: 13,
  infoWindow: (
    <div>
      <h1>Hello world</h1>
    </div>
  ),
  styles: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
};

GoogleMaps.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  google: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  place: PropTypes.arrayOf(PropTypes.object),
  infoWindow: PropTypes.object,
};

export { GoogleMaps };
