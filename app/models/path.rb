# == Schema Information
#
# Table name: paths
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  title        :string
#  starting_lat :float
#  starting_lng :float
#  ending_lat   :float
#  ending_lng   :float
#  distance     :float
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
