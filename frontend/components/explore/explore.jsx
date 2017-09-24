import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GMap from '../map/GMap';


class Explore extends React.Component {

  update(){
    console.log("UPDATE BOIZ", this.props);
  }

  render(){
    console.log("CURRENT", this.props);
    return(
      <div className="explore-div">
      <h1>EXPLORE</h1>
        <div className="map-div">
          <div className="path-list">
          <p>PATHS HERE</p>
          </div>
          <GMap onChange={this.update}/>
        </div>
      </div>
    );
  }
}

export default Explore;
