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
#  time        :integer
#  dayornight  :string
#  route_id    :integer
#

require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
