import * as UserEventAPIUtil from '../util/user_event_api_util';

export const RECEIVE_USER_EVENTS = 'RECEIVE_USER_EVENTS';
export const RECEIVE_USER_EVENT = 'RECEIVE_USER_EVENT';


export const fetchUserEvents = () => dispatch => (
  UserEventAPIUtil.fetchUserEvents().then(userEvents => (
    dispatch(receiveUserEvents(userEvents))
  ))
);

export const createUserEvent = (userEvent) => dispatch => (
  UserEventAPIUtil.createUserEvent(userEvent).then(userEvent => (
    dispatch(receiveUserEvent(userEvent))
  ))
);


export const receiveUserEvents = userEvents => ({
  type: RECEIVE_USER_EVENTS,
  userEvents
});

export const receiveUserEvent = userEvent => ({
  type: RECEIVE_USER_EVENT,
  userEvent
});
