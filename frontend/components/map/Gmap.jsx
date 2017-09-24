import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerUtil from '../../util/marker_util';

class GoogleMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", startingPos: {lat: 0, lng: 0},
                  endingPos: {lat: 0, lng: 0}, distance: 0};
    this.handleDistance = this.handleDistance.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    google.maps.event.addListener(this.map, "click", (event) => {
        if (!this.state.startingPos.lat) {
          this.setState({distance: 0});
          this.addMarker(event.latLng, this.map);
          this.setState({startingPos:
            {lat: event.latLng.lat(), lng: event.latLng.lng()}});
        } else if (!this.state.endingPos.lat) {
          this.addMarker(event.latLng, this.map);
          this.setState({endingPos:
            {lat: event.latLng.lat(), lng: event.latLng.lng()}});
          this.placeMarkersOnMap(null);
          this.markers = [];
          const starting = {lat: this.state.startingPos.lat, lng: this.state.startingPos.lng};
          const ending = { lat: this.state.endingPos.lat, lng: this.state.endingPos.lng};
          const requesttwo = {
            origin:starting,
            destination:ending,
            travelMode: 'DRIVING'
          };
          directionsService.route(requesttwo, (result, status) => {
            if (status == 'OK') {
              directionsDisplay.setDirections(result);
              this.setState({distance: parseFloat(result.routes[0].legs[0].distance.text)});
            }
          });
          // this.setState({startingPos: {lat: 0, lng: 0}, endingPos: {lat: 0, lng: 0}});
        }
        directionsDisplay.setMap(this.map);
    });
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


  handleDistance(){
    if (this.state.distance) {
      // document.getElementsByClassName("plus-form")[0].click();
      console.log("OK");
    }
  }

  handleClick(e){
    e.preventDefault();
    this.props.action(this.state);
    if (this.state.distance) {
      this.setState({startingPos: {lat: 0, lng: 0},
                    endingPos: {lat: 0, lng: 0},
                    distance: 0});
    }
  }


  render(){
    return(
      <div className="button-map-container">
        <button onClick={this.handleClick}
        disabled={this.state.distance > 0 ? "" : "true"}>
        Add Path</button>
        <div className="map-container" ref="map">
          Map
        </div>
      </div>
    );
  }
}

export default withRouter(GoogleMap);
