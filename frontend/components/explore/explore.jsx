import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PathCreateModal from '../map/PathCreateModal';
import GMap from '../map/GMap';


class Explore extends React.Component {
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
    this.state = {title: "", startingPos: {lat: 0, lng: 0},
                  endingPos: {lat: 0, lng: 0}, distance: ""};
  }

  update(ownProps){
    console.log("PARENT", ownProps);
    this.setState({startingPos: {lat: ownProps.startingPos.lat,
                      lng: ownProps.startingPos.lng},
                    endingPos: {lat: ownProps.endingPos.lat,
                      lng: ownProps.endingPos.lng},
                    distance: ownProps.distance});
    document.getElementsByClassName("path-create")[0].click();
  }

  render(){
    return(
      <div className="explore-div">
      <h1>EXPLORE</h1>
      <PathCreateModal state={this.state}/>
        <div className="map-div">
          <div className="path-list">
          <p>PATHS HERE</p>
          </div>
          <GMap action={this.update}/>
        </div>
      </div>
    );
  }
}

export default Explore;
