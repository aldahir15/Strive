import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class WorkoutCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.state = {title: "", description: "", calendar_id: 0,
                  time: 9, dayornight: "AM", id: 0, path_id: 0};
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleDate(e){
    const year = parseInt(e.target.value.slice(0,4));
    const month = parseInt(e.target.value.slice(5,7));
    const day = parseInt(e.target.value.slice(8,10));
    let calendarId;
    this.setState({calendar_id: this.props.calendars[day].id});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createWorkout(this.state);
    location.reload();
  }

  pathOptions(){
    if (this.props.paths) {
      return(
        Object.keys(this.props.paths).map((indx) =>
        <option value={indx}>
          {this.props.paths[indx].title} - {this.props.paths[indx].distance} mi
        </option>)
      );
    } else {
      return(<option></option>);
    }
  }

  render(){
    return(
      <div className="update-form">
        <form onSubmit={this.handleSubmit}>
          <h1>CREATE A WORKOUT</h1>
          <label>Title:
            <input type="text" onChange={this.update("title")} value={this.state.title} />
          </label>

          <label>Description:
            <textarea onChange={this.update("description")} value={this.state.description} />
          </label>

          <label>Time:
            <div className="time-select">
              <input type="number" onChange={this.update("time")} value={this.state.time} />
              <select onChange={this.update("dayornight")}>
                <option value="AM" >AM</option>
                <option value="PM" >PM</option>
              </select>
            </div>
          </label>

          <label>Description:
            <input type="date" onChange={this.handleDate} />
          </label>

          <label>Path:
            <select onChange={this.update("path_id")}>
              <option selected>--NO PATH (PATHS BELOW)--</option>
              {this.pathOptions()}
            </select>
          </label>


          <input className="submit-create" type="submit" value="Create Workout" />
        </form>
      </div>
    );
  }

}


export default WorkoutCreateForm;
