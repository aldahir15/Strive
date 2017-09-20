import * as CalendarAPIUtil from '../util/calendar_api_util';

export const RECEIVE_CALENDAR = 'RECEIVE_CALENDAR';
export const RECEIVE_CALENDAR_ERRORS = 'RECEIVE_CALENDAR_ERRORS';

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

export const receiveCalendar = calendar => ({
  type: RECEIVE_CALENDAR,
  calendar
});

export const receiveCalendarErrors = errors => ({
  type: RECEIVE_CALENDAR_ERRORS,
  errors
});
