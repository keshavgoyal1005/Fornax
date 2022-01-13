import React, {Component} from "react";
import {Map,Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleMapsAPI } from './client-config';

const mapStyles = {
    position:"relative",
    padding: "15px",
    borderRadius:"20px",
    maxWidth:"700px",
    height: "60vh",
    zIndex: "1 !important",
    border:"2px solid cyan",
    margin:"20px",
    align:"center",
    margin:"30px auto",
    
  }
class GoogleMap extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            style={mapStyles}>
          <Marker onClick={this.onMarkerClick}
                  name={'Delhi'} />
        </Map>
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: GoogleMapsAPI
  })(GoogleMap)

