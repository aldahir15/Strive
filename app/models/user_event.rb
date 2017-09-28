class UserEvent < ApplicationRecord
  validates :user_id, :event_id, presence: true
  validates :event_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :event
end
