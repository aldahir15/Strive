@paths.each do |path|
  json.set! path.workout_id do
    json.extract! path, :id, :workout
  end
end
