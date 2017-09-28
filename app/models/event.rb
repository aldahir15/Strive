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
#  lat         :float
#  lng         :float
#

class Event < ApplicationRecord
  validates :title, :user, :calendar, presence: true
  after_initialize :ensure_image_url

  def ensure_image_url
    self.image_url ||= "http://res.cloudinary.com/ddgt25kwb/image/upload/e_blackwhite,q_100/v1505944279/logo_cpwpsb.png"
  end

  belongs_to :user

  belongs_to :calendar

  has_many :user_events

end
