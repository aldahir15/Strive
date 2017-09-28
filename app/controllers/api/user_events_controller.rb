class Api::UserEventsController < ApplicationController
  before_action :require_login

  def index
    @user_events = UserEvent.where(user_id: current_user.id)
  end

  def create
    @user_event = UserEvent.new(user_event_params)
    @user_event.user_id = current_user.id
    if @user_event.save
    else
      render json: @user_event.errors.full_messages, status: 422
    end
  end

  private
  def user_event_params
    params.require(:user_event).permit(:event_id)
  end
end
