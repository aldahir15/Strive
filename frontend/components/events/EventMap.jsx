import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerUtil from '../../util/marker_util';

class GoogleMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", description: "",
                  calendar_id: 0, image_url: "",
                  day: 0, month: 0, year: 0, lat: 0, lng: 0};
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.markers = [];
  }

  componentDidMount(){
    console.log("PROPS", this.props);
    this.setState({title: this.props.currState.title});
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    if (!this.props.workout) {
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
        if (this.markers.length === 0) {
          this.addMarker(event.latLng, this.map);
          this.setState({lat: event.latLng.lat(), lng: event.latLng.lng()});
        } else {
          this.placeMarkersOnMap(null);
          this.addMarker(event.latLng, this.map);
          this.setState({lat: event.latLng.lat(), lng: event.latLng.lng()});
        }
      });
      }
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


  handleClick(e){
    e.preventDefault();
    this.props.action(this.state);
    if (this.state.distance) {
      this.setState({startingPos: {lat: 0, lng: 0},
                    endingPos: {lat: 0, lng: 0},
                    distance: 0});
    }
  }

  renderButton(){
    if (!this.props.match.params.workoutId) {
      return(
        <button onClick={this.handleClick}
        disabled={this.state.distance > 0 ? "" : "true"}>
        Add Path</button>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createEvent(this.state);
    location.reload();
  }

  render(){
    console.log("YO", this.state);
    return(
      <div className="button-map-container">
        {this.props.workout && !this.props.workout.path ?
        <div></div> :
          <div className="map-container-2" ref="map">
          Map
        </div>}
        <input className="submit-update" type="submit" value="Create Event" />
      </div>
    );
  }
}

export default withRouter(GoogleMap);
