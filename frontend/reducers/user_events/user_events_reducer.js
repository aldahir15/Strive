import { merge } from 'lodash';
import { RECEIVE_USER_EVENTS } from '../../actions/user_event_actions';

const UserEventReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_EVENTS:
      return merge({}, action.userEvents );
    default:
      return state;
  }
};

export default UserEventReducer;
