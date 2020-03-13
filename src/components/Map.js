import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import api_key from '../api-keys'



const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 21.0190,
      lng: -101.2574
    },
    zoom: 8
  };

  render() {
    return (
      <div id='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  api_key}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={21.0190}
            lng={101.2574}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;