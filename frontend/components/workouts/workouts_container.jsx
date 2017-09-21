import { connect } from 'react-redux';
import Workouts from './workouts';
import { fetchWorkout, createWorkout, deleteWorkout } from '../../actions/workout_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  const workout = state.workout;
  return {
    workout
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchWorkout: (id) => dispatch(fetchWorkout(id)),
  deleteWorkout: (id) => dispatch(deleteWorkout(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Workouts);
