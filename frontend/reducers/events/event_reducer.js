import { merge } from 'lodash';
import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../../actions/event_actions';

const EventReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events );
    case RECEIVE_EVENT:
      return merge({}, action.event );
    default:
      return state;
  }
};

export default EventReducer;
