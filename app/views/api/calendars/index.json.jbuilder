@calendar.each do |day|
  json.set! day.day do
    json.extract! day, :id, :day, :workouts, :month, :year, :events
  end
end
