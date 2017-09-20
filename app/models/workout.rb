# == Schema Information
#
# Table name: workouts
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  user_id     :integer          not null
#  calendar_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Workout < ApplicationRecord
  validates :title, :user, :calendar, presence: true

  belongs_to :calendar
  belongs_to :user
end
