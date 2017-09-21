import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class WorkoutUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "", description: "", calendar_id: 0};
  }

  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId)
    .then((action) => this.setState({title: action.workout.title,
                                    description: action.workout.description ? action.workout.description : "",
                                    calendar_id: action.workout.calendar.id}));
  }

  componentWillReceiveProps(nextProps){
    // console.log(this.props.workout);
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
    this.props.action(this.state);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" onChange={this.update("title")} value={this.state.title} />
          </label>

          <label>Description:
            <textarea onChange={this.update("description")} value={this.state.description} />
          </label>

          <label>Date:
            <input type="number" onChange={this.update("calendar_id")} value={this.state.calendar_id} />
          </label>

          <input type="submit" value="Update Workout" />
        </form>
      </div>
    );
  }

}


export default WorkoutUpdateForm;
