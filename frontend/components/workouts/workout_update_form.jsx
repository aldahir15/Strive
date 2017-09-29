import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class WorkoutUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {title: "", description: "", calendar_id: 0,
                  time: 9, dayornight: "AM"};
  }

  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId)
    .then((action) => this.setState({title: action.workout.title,
                                    description: action.workout.description ? action.workout.description : "",
                                    calendar_id: action.workout.calendar.id,
                                    time: action.workout.time,
                                    dayornight: action.workout.dayornight,
                                    id: action.workout.id,
                                    }));
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.workoutId !== nextProps.match.params.workoutId) {
      this.props.fetchWorkout(nextProps.match.params.workoutId);
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateWorkout(this.state);
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
          <label><p>Title:</p>
            <input type="text" onChange={this.update("title")} value={this.state.title} />
          </label>

          <label><p>Description:</p>
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


          <input type="submit" className="submit-update" value="Update Workout" />
        </form>
      </div>
    );
  }

}


export default WorkoutUpdateForm;
