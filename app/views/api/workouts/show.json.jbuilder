json.extract! @workout, :title, :description
json.calendar do
  json.array! @workout.calendar, :day
end
json.user do
  json.array! @workout.user, :username
end
