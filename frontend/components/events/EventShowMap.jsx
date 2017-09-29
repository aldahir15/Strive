import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerUtil from '../../util/marker_util';

class GoogleMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", startingPos: {lat: 0, lng: 0},
                  endingPos: {lat: 0, lng: 0}, distance: 0};
    this.markers = [];
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
      directionsDisplay.setMap(this.map);
      this.addMarker({lat: this.props.event.lat, lng: this.props.event.lng}, this.map);
  }

  addMarker(location, map){
    const marker = new google.maps.Marker({position: location, map: map});
    this.markers.push(marker);
  }

  placeMarkersOnMap(map){
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  render(){
    return(
      <div className="button-map-container-events">
        <div className="map-container-events" ref="map">
          Map
        </div>
      </div>
    );
  }
}

export default withRouter(GoogleMap);
