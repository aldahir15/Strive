export const fetchPaths = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/paths/`
  });
};

export const fetchPath = (workoutId, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/workouts/${workoutId}/paths/${id}`
  });
};


export const deletePath = (workoutId, id) => {
  return $.ajax({
    url: `/api/workouts/${workoutId}/paths/${id}`,
    method: 'DELETE'
  });
};
