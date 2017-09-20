json.extract! @calendar, :day
json.workouts do
  json.array! @calendar.workouts, :title, :description
end
