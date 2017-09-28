# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  user_id     :integer
#  calendar_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#  day         :integer
#  month       :integer
#  year        :integer
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
