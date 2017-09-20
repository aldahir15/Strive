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

require 'test_helper'

class CalendarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
