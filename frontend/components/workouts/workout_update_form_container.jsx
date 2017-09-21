import { connect } from 'react-redux';
import WorkoutUpdateForm from './workout_update_form';
import { fetchWorkout, createWorkout, updateWorkout, deleteWorkout } from '../../actions/workout_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let workout = {title: "", description: "", calendar_id: ""};
  if (ownProps.match.params.workoutId) {
    console.log(state.workout);
    workout = state.workout;
  }
  return {
    workout
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.params.workoutId ? updateWorkout : createWorkout;
  return {
    fetchWorkout: (id) => dispatch(fetchWorkout(id)),
    action: (workout) => dispatch(action(workout)),
    deleteWorkout: (id) => dispatch(deleteWorkout(id))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutUpdateForm));
