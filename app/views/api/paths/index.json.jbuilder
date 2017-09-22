@paths.each do |path|
  json.set! path.workout_id do
    json.extract! path, :id, :workout, :starting_lat, :starting_lon, :ending_lat, :ending_lon
  end
end
