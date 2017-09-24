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

require 'test_helper'

class PathTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
