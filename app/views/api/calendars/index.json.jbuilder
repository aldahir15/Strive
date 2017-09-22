@calendar.each do |day|
  json.set! day.day do
    json.extract! day, :id, :day, :workouts
  end
end
