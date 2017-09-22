import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GMap from '../map/GMap';

class Explore extends React.Component {

  render(){
    console.log(this.props);
    return(
      <div className="explore-div">
      <h1>EXPLORE</h1>
        <div className="map-div">
          <div className="path-list">
          <p>PATHS HERE</p>
          </div>
          <GMap />
        </div>
      </div>
    );
  }
}

export default Explore;
