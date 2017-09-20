class Api::CalendarsController < ApplicationController
  before_action :require_login

  def create
    @calendar = Calendar.new(calendar_params)
    @calendar.user_id = current_user.id
    if @calendar.save
      render "api/calendars/show"
    else
      render json: @calendar.errors.full_messages, status: 422
    end
  end

  def show
    @calendar = Calendar.find(params[:id])
  end

  def destroy
    @calendar = Calendar.find(params[:id])
    @calendar.delete
  end

  private
  def calendar_params
    params.require(:calendar).permit(:day)
  end
end
