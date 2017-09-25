class Api::EventsController < ApplicationController
  before_action :require_login

  def index
    @events = Event.where(user_id: current_user.id)
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.delete
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :calendar_id)
  end
end
