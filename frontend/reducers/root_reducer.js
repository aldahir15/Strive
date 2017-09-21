import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import calendar from './calendar/calendar_reducer';
import workout from './workouts/workout_reducer';


export default combineReducers({
  session,
  errors,
  calendar,
  workout
});
