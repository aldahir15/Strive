import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import calendar from './calendar/calendar_errors_reducer';

export default combineReducers({
  session,
  calendar
});
