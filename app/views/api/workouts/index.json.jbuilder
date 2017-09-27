@workouts.each do |workout|
  json.set! workout.id do
    json.extract! workout, :id, :title
  end
end
