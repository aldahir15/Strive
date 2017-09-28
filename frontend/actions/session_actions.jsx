import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';



export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => {
    return dispatch(receiveErrors(error.responseJSON));
  }
  )
);

export const login = (user) => (dispatch) => {
  SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => {
    return dispatch(receiveErrors(error.responseJSON));
  }
  )
};

export const logout = () => (dispatch) => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const updateUser = (id, data) => (dispatch) => (
  SessionAPIUtil.updateUser(id, data).then(user => (
    dispatch(receiveCurrentUser(user))
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
