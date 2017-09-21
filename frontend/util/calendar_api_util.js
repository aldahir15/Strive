export const fetchCalendar = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/calendars/${id}`
  });
};

export const createCalendar = calendar => {
  return $.ajax({
    method: 'POST',
    url: '/api/calendars',
    data: {calendar}
  });
};

export const deleteCalendar = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/calendars/${id}`
  });
};
