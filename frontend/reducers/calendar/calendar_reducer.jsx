import { merge } from 'lodash';
import { RECEIVE_CALENDAR } from '../../actions/calendar_actions';

const CalendarReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CALENDAR:
      return merge({}, action.calendar );
    default:
      return state;
  }
};

export default CalendarReducer;
