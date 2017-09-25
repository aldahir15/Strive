import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerUtil from '../../util/marker_util';

class GoogleMap extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", startingPos: {lat: 0, lng: 0},
                  endingPos: {lat: 0, lng: 0}, distance: 0};
  }

  componentDidMount(){
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    directionsDisplay.setMap(this.map);
      const mapOptions = {
        center: {
          lat: this.props.workout.path.starting_lat,
          lng: this.props.workout.path.starting_lng
        },
        zoom: 13
      };
      const requesttwo = {
        origin: {lat: this.props.workout.path.starting_lat,
                lng: this.props.workout.path.starting_lng},
        destination: {lat: this.props.workout.path.ending_lat,
                    lng: this.props.workout.path.ending_lng},
        travelMode: 'DRIVING'
      };
      this.map = new google.maps.Map(map, mapOptions);
      directionsService.route(requesttwo, (result, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
          this.setState({distance: parseFloat(result.routes[0].legs[0].distance.text)});
        }
      directionsDisplay.setMap(this.map);
      });
  }

  render(){
    return(
      <div>
        <p>{this.props.workout.path.title}</p>
        <p>{this.props.workout.path.distance}</p>
        <div className="map-show-container" ref="map">
          Map
        </div>
      </div>
    );
  }
}

export default withRouter(GoogleMap);
