import * as WorkoutAPIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';

export const fetchWorkout = id => dispatch => (
  WorkoutAPIUtil.fetchWorkout(id).then(workout => (
    dispatch(receiveWorkout(workout))
  ))
);

export const createWorkout = workout => dispatch => (
  WorkoutAPIUtil.createWorkout(workout).then(workout => (
    dispatch(receiveWorkout(workout))
  ))
);

export const updateWorkout = workout => dispatch => (
  WorkoutAPIUtil.updateWorkout(workout).then(workout => (
    dispatch(receiveWorkout(workout))
  ))
);

export const deleteWorkout = workout => dispatch => (
  WorkoutAPIUtil.deleteWorkout(workout).then(() => (
    dispatch(receiveWorkout({}))
  ))
);

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout
});
