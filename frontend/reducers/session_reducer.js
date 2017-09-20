import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      console.log(currentUser);
      return merge({}, {currentUser} );
    default:
      return state;
  }
};

export default SessionReducer;
