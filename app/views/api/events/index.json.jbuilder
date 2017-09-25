@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :description, :image_url, :calendar
  end
end
