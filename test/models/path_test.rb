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

require 'test_helper'

class PathTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
