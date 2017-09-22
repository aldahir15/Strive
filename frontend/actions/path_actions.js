import * as PathAPIUtil from '../util/paths_api_util';

export const RECEIVE_ALL_PATHS = 'RECEIVE_ALL_PATHS';
export const RECEIVE_PATH = 'RECEIVE_PATH';
export const RECEIVE_PATH_ERRORS = 'RECEIVE_PATH_ERRORS';

export const fetchPaths = () => dispatch => (
  PathAPIUtil.fetchPaths().then(paths => (
    dispatch(receivePaths(paths))
  ))
);

export const fetchPath = (workoutId, id) => dispatch => (
  PathAPIUtil.fetchPath(workoutId, id).then(path => (
    dispatch(receivePath(path))
  ), error => {
    return dispatch(receivePathErrors(error.responseJSON));
  }
  )
);

export const createPath = (path) => dispatch => (
  PathAPIUtil.createPath(path).then(path => (
    dispatch(receivePath(path))
  ))
);

export const deletePath = (workoutId, id) => (dispatch) => (
  PathAPIUtil.deletePath(workoutId, id)
);

export const receivePaths = paths => ({
  type: RECEIVE_ALL_PATHS,
  paths
});

export const receivePath = path => ({
  type: RECEIVE_PATH,
  path
});

export const receivePathErrors = errors => ({
  type: RECEIVE_PATH_ERRORS,
  errors
});
