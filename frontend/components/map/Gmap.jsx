import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerUtil from '../../util/marker_util';

class GoogleMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {startingPos: {lat: 0, lon: 0}, endingPos: {lat: 0, lon: 0}};
  }

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
    google.maps.event.addListener(this.map, "click", (event) => {
        if (!this.state.startingPos.lat) {
          new google.maps.Marker({position: event.latLng, map: this.map});
          this.setState({startingPos:
            {lat: event.latLng.lat(), lon: event.latLng.lng()}});
        } else if (!this.state.endingPos.lat) {
          new google.maps.Marker({position: event.latLng, map: this.map});
          this.setState({endingPos:
            {lat: event.latLng.lat(), lon: event.latLng.lng()}});
        } else if (this.state.startingPos.lat && this.state.endingPos.lat ) {
          const starting = {lat: this.state.startingPos.lat, lng: this.state.startingPos.lon};
          const ending = { lat: this.state.endingPos.lat, lng: this.state.endingPos.lon};
          console.log("WHAT WENT WRONG DUMMY", starting, ending);
          const requesttwo = {
            origin:starting,
            destination:ending,
            travelMode: 'DRIVING'
          };
          directionsService.route(requesttwo, function(result, status) {
            if (status == 'OK') {
              directionsDisplay.setDirections(result);
              console.log(result.routes[0].legs[0].distance);
            }
          });
        }
        console.log(this.state);
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
