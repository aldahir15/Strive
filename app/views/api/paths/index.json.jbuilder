@paths.each do |path|
  json.set! path.id do
    json.extract! path, :id, :title, :starting_lat, :starting_lng, :ending_lat, :ending_lng, :distance
  end
end
