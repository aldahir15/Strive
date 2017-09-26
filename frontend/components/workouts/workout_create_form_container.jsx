import { connect } from 'react-redux';
import WorkoutCreateForm from './workout_create_form';
import { fetchWorkout, createWorkout, updateWorkout, deleteWorkout } from '../../actions/workout_actions';
import { fetchAllCalendars } from '../../actions/calendar_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const workout = {title: "", description: "", calendar_id: ""};
  const calendars = state.calendar;
  return {
    workout,
    calendars
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchAllCalendars: () => dispatch(fetchAllCalendars()),
    createWorkout: (workout) => dispatch(createWorkout(workout)),
    deleteWorkout: (id) => dispatch(deleteWorkout(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateForm));
