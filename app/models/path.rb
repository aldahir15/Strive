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
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  title        :string
#

class Path < ApplicationRecord
  validates :title, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :workouts,
    primary_key: :id,
    foreign_key: :path_id,
    class_name: :Workout
end
