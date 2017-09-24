import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class PathForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("PATH FORM", this.props);
    this.state = this.props.state;
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createPath(
      {title: this.state.title,
       starting_lat: this.state.startingPos.lat,
       starting_lng: this.state.startingPos.lng,
       ending_lat: this.state.endingPos.lat,
       ending_lng: this.state.endingPos.lng,
       distance: this.state.distance});
    location.reload();
  }

  render(){
    console.log(this.state);
    return(
      <div className="update-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" onChange={this.update("title")} />
          </label>

          <p>This route is {this.state.distance} miles</p>

          <input type="submit" value="Create Path" />
        </form>
      </div>
    );
  }

}

export default PathForm;
