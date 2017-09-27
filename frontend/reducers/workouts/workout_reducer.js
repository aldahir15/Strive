import { merge } from 'lodash';
import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT } from '../../actions/workout_actions';

const WorkoutReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WORKOUTS:
      return merge({}, action.workouts );
    case RECEIVE_WORKOUT:
      return merge({}, action.workout );
    default:
      return state;
  }
};

export default WorkoutReducer;
