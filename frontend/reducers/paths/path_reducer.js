import { merge } from 'lodash';
import { RECEIVE_ALL_PATHS, RECEIVE_PATH } from '../../actions/path_actions';

const PathReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PATHS:
      return merge({}, action.paths);
    case RECEIVE_PATH:
      return merge({}, action.path );
    default:
      return state;
  }
};

export default PathReducer;
