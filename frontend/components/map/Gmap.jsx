import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerUtil from '../../util/marker_util';

class GoogleMap extends React.Component {

  componentDidMount(){
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      },
      zoom: 13
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    const latLng = [
      {lat: 37.773972, lng: -122.431297},
      {lat: 37.7, lng: -122.4}];
    // latLng.map((path) => new google.maps.Marker({
    //   position: path,
    //   map: this.map,
    //   title: "AM I WORKING?",
    //   draggable: true
    // }));
    directionsDisplay.setMap(this.map);

    const start = latLng[0];
    const end = latLng[1];
    let request = {
      origin:start,
      destination:end,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
        console.log(result.routes[0].legs[0].distance);
      }
    });
  }



  render(){
    return(
      <div className="map-container" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(GoogleMap);
