# == Schema Information
#
# Table name: paths
#
#  id           :integer          not null, primary key
#  starting_lat :integer          not null
#  starting_lon :integer          not null
#  ending_lat   :integer          not null
#  ending_lon   :integer          not null
#  distance     :integer
#  user_id      :integer          not null
#  workout_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Path < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :workout,
    primary_key: :id,
    foreign_key: :workout_id,
    class_name: :Workout
end
