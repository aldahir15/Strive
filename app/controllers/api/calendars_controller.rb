class Api::CalendarsController < ApplicationController
  before_action :require_login, :ensure_full_calendar

  def ensure_full_calendar
    if Calendar.where(user_id: current_user.id).length < 29
      (1..30).to_a.each do |x|
        Calendar.create(day: x, user_id: current_user.id)
      end
    end
  end

  def index
    @calendar = Calendar.where(user_id: current_user.id)
  end

  def create
    @calendar = Calendar.new(DateTime.now.to_date)
    @calendar.user_id = current_user.id
    if @calendar.save
      render "api/calendars/show"
    else
      render json: @calendar.errors.full_messages, status: 422
    end
  end

  def show
    @calendar = Calendar.where(day: params[:id], user_id: current_user.id)[0]
  end

  def destroy
    @calendar = Calendar.where(day: params[:id], user_id: current_user.id)[0]
    @calendar.delete
  end

  private
  def calendar_params
    params.require(:calendar).permit(:day)
  end
end
