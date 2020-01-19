import React, { useState } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
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
const { apiKey, styles, map_one_styles, map_two_styles, map_Three_styles, map_style_dark } = mapdata;

const GoogleMapsOne = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

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

  const onMapClicked = props => {
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
      <Map onClick={onMapClicked} google={google} style={styles} styles={map_one_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        <Marker onClick={onMarkerClick} position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          <div>
            <h1>Hello world</h1>
          </div>
        </InfoWindow>
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

const GoogleMapsBasic = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

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

  const onMapClicked = props => {
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
      <Map onClick={onMapClicked} google={google} style={styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        <Marker onClick={onMarkerClick} position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          <div>
            <h1>Hello world</h1>
          </div>
        </InfoWindow>
      </Map>
    </GmapWraper>
  );
});
GoogleMapsBasic.propTypes = {
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

  const onMapClicked = props => {
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
      <Map onClick={onMapClicked} google={google} style={styles} styles={map_two_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom}>
        <Marker onClick={onMarkerClick} position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          <div>
            <h1>Hello world</h1>
          </div>
        </InfoWindow>
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

  const onMapClicked = props => {
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
      <Map onClick={onMapClicked} google={google} style={styles} styles={map_Three_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        <Marker onClick={onMarkerClick} position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          <div>
            <h1>Hello world</h1>
          </div>
        </InfoWindow>
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

  const onMapClicked = props => {
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
      <Map onClick={onMapClicked} google={google} style={styles} styles={map_two_styles} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        {place.map((item, key) => {
          return <Marker key={key + 1} onClick={onMarkerClick} position={{ lat: item.latitude, lng: item.longitude }} icon={require(`../../static/img/map/mpc.png`)} />;
        })}
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          <div>
            <h1>Hello world</h1>
          </div>
        </InfoWindow>
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

const GoogleMapsDark = GoogleApiWrapper({
  apiKey,
})(props => {
  const { latitude, longitude, google, width, height, zoom } = props;

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

  const onMapClicked = props => {
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
      <Map onClick={onMapClicked} google={google} style={styles} styles={map_style_dark} center={{ lat: latitude, lng: longitude }} zoom={zoom} height="400px">
        <Marker onClick={onMarkerClick} position={{ lat: latitude, lng: longitude }} icon={require(`../../static/img/map/mpc.png`)} />
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          <div>
            <h1>Hello world</h1>
          </div>
        </InfoWindow>
      </Map>
    </GmapWraper>
  );
});
GoogleMapsDark.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  google: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
};

export { GoogleMapsOne, GoogleMapsTwo, GoogleMapsThree, GoogleMapsFour, GoogleMapsDark, GoogleMapsBasic };
