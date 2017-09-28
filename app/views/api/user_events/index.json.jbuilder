@user_events.each do |user_event|
  json.set! user_event.event_id do
    json.extract! user_event, :id, :user_id, :event_id, :event
  end
end
