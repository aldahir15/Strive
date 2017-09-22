import * as CalendarAPIUtil from '../util/calendar_api_util';

export const RECEIVE_ALL_CALENDARS = 'RECEIVE_ALL_CALENDARS';
export const RECEIVE_CALENDAR = 'RECEIVE_CALENDAR';
export const RECEIVE_CALENDAR_ERRORS = 'RECEIVE_CALENDAR_ERRORS';


export const fetchAllCalendars = () => dispatch => (
  CalendarAPIUtil.fetchAllCalendars().then(calendars => (
    dispatch(receiveAllCalendars(calendars))
  ))
);

export const fetchCalendar = id => dispatch => (
  CalendarAPIUtil.fetchCalendar(id).then(calendar => (
    dispatch(receiveCalendar(calendar))
  ), error => {
    return dispatch(receiveCalendarErrors(error.responseJSON));
  }
  )
);

export const createCalendar = (calendar) => (dispatch) => {
  CalendarAPIUtil.createCalendar(calendar).then(calendar => (
    dispatch(receiveCalendar(calendar))
  ), error => {
    return dispatch(receiveCalendarErrors(error.responseJSON));
  }
);
};

export const deleteCalendar = (id) => (dispatch) => (
  CalendarAPIUtil.deleteCalendar(id)
);

export const receiveAllCalendars = calendars => ({
  type: RECEIVE_ALL_CALENDARS,
  calendars
});

export const receiveCalendar = calendar => ({
  type: RECEIVE_CALENDAR,
  calendar
});

export const receiveCalendarErrors = errors => ({
  type: RECEIVE_CALENDAR_ERRORS,
  errors
});
