class Api::CalendarsController < ApplicationController
  before_action :require_login, :ensure_full_calendar

  def ensure_full_calendar
    daysinyear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if Calendar.where(user_id: current_user.id,
                  month: Date.today.strftime("%m").to_i).length < 29
      (1..(daysinyear[Date.today.strftime("%m").to_i - 1])).to_a.each do |x|
        Calendar.create(day: x, user_id: current_user.id,
                        month: Date.today.strftime("%m").to_i,
                        year: Date.today.strftime("%Y").to_i)
      end
    end
  end

  def index
    @calendar = Calendar.where(user_id: current_user.id)
  end

  def create
    @calendar = Calendar.new(DateTime.now.to_date)
    @calendar.month ||= Date.today.strftime("%m").to_i
    @calendar.year ||= Date.today.strftime("%Y").to_i
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
