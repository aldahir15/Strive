import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENT';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

export const fetchEvents = () => dispatch => (
  EventAPIUtil.fetchEvents().then(events => (
    dispatch(receiveEvents(events))
  ))
);

export const fetchEvent = id => dispatch => (
  EventAPIUtil.fetchEvent(id).then(event => (
    dispatch(receiveEvent(event))
  ))
);

export const createEvent = event => dispatch => (
  EventAPIUtil.createEvent(event).then(event => (
    dispatch(receiveEvent(event))
  ))
);

export const updateEvent = event => dispatch => (
  EventAPIUtil.updateEvent(event).then(event => (
    dispatch(receiveEvent(event))
  ))
);

export const deleteEvent = event => dispatch => (
  EventAPIUtil.deleteEvent(event).then(() => (
    dispatch(receiveEvent({}))
  ))
);

export const receiveEvents = events => ({
  type: RECEIVE_EVENT,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});
