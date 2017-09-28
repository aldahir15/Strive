export const fetchUserEvents = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/user_events/"
  });
};


export const createUserEvent = (user_event) => {
  return $.ajax({
    method: 'POST',
    url: "/api/user_events/",
    data: {user_event}
  });
};
