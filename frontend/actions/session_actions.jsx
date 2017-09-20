import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';



export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const login = (user) => (dispatch) => {
  return( SessionAPIUtil.login(user).then(user => {
    return (dispatch(receiveCurrentUser(user)), error => (
      dispatch(receiveErrors(error.responseJSON))
    ));
  }
  ));
};

export const logout = () => (dispatch) => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
