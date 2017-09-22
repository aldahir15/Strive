import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import WorkoutModal from './WorkoutModal';
import WorkoutUpdateFormContainer from './workout_update_form_container';
import WorkoutCreateFormContainer from './workout_create_form_container';
import GMap from '../map/Gmap';



class Workouts extends React.Component {
  constructor(props){
    super(props);
    this.information = this.information.bind(this);
    this.deleteWorkout = this.deleteWorkout.bind(this);
  }

  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId);
  }

  deleteWorkout(){
    this.props.deleteWorkout(this.props.workout.id);
    this.props.history.push('/home');
  }

  information(){
    const date = new Date;
    const month = date.getMonth();
    const year = date.getFullYear();
    if (this.props.workout.title) {
      return (
        <div className="workout-show-container">
          <h3>Title: {this.props.workout.title}</h3>
          <p>Description: {this.props.workout.description}</p>
          <p>Day: {month}/{this.props.workout.calendar.day}/{year}</p>
          <div className="form-container">
            <WorkoutModal action={WorkoutUpdateFormContainer}/>
            <button onClick={this.deleteWorkout} className="workout-form">
              Delete
            </button>
          </div>
          <GMap />
        </div>
      );
    }
  }

  render(){
    return(
      <div className="workout-show-div">
        {this.information()}
      </div>
    );
  }
}

export default Workouts;
