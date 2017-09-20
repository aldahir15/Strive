# == Schema Information
#
# Table name: calendars
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  day        :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Calendar < ApplicationRecord
  validates :user, :day, presence: true

  belongs_to :user
  has_many :workouts
end
