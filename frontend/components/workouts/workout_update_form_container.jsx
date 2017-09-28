import { connect } from 'react-redux';
import WorkoutUpdateForm from './workout_update_form';
import { fetchWorkout, createWorkout, updateWorkout, deleteWorkout } from '../../actions/workout_actions';
import { fetchAllCalendars } from '../../actions/calendar_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let workout = {title: "", description: "", calendar_id: ""};
  if (ownProps.match.params.workoutId) {
    workout = state.workout;
  }
  const calendars = state.calendar;
  return {
    workout,
    calendars
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchWorkout: (id) => dispatch(fetchWorkout(id)),
    updateWorkout: (workout) => dispatch(updateWorkout(workout)),
    deleteWorkout: (id) => dispatch(deleteWorkout(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutUpdateForm));
