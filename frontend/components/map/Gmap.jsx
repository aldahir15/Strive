import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


class GMap extends React.Component {

  componentDidMount(){
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      },
      zoom: 13
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }


  render(){
    return(
      <div className="map-container" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(GMap);
