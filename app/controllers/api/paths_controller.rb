class Api::PathsController < ApplicationController
  before_action :require_login

  def index
    @paths = Path.where(user_id: current_user.id)
  end

  def create
    @path = Path.new(path_params)
    @path.user_id = current_user.id
    if @path.save
      render "api/paths/show"
    else
      render json: @path.errors.full_messages, status: 422
    end
  end

  def show
    @path = Path.where(workout_id: params[:workout_id], id: params[:id])[0]
  end

  def destroy
    @path = Path.where(workout_id: params[:workout_id], id: params[:id])[0]
    @path.delete
  end

  private
  def path_params
    params.require(:path).permit(:starting_lat, :starting_lon, :ending_lat, :ending_lon,
                                  :distance, :workout_id)
  end
end
