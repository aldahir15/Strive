import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class WorkoutCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {title: "", description: "", calendar_id: this.props.calendar.id, time: 9, dayornight: "AM", id: 0};
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createWorkout(this.state);
    location.reload();
  }

  render(){
    console.log(this.state);
    return(
      <div className="update-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" onChange={this.update("title")} value={this.state.title} />
          </label>

          <label>Description:
            <textarea onChange={this.update("description")} value={this.state.description} />
          </label>

          <label>Time:
            <input type="number" onChange={this.update("time")} value={this.state.time} />
            <select onChange={this.update("dayornight")}>
              <option value="AM" >AM</option>
              <option value="PM" >PM</option>
            </select>
          </label>


          <input type="submit" value="Create Workout" />
        </form>
      </div>
    );
  }

}


export default WorkoutCreateForm;
