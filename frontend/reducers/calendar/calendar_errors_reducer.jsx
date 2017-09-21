import { RECEIVE_CALENDAR, RECEIVE_CALENDAR_ERRORS } from '../../actions/calendar_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CALENDAR_ERRORS:
      return action.errors;
    case RECEIVE_CALENDAR:
      return [];
    default:
      return state;
  }
};
