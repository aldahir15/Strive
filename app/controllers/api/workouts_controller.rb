class Api::WorkoutsController < ApplicationController
  before_action :require_login

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      render "api/workouts/show"
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def update
    @workout = Workout.find(params[:id])
    if @workout.update(workout_params)
      render "api/workouts/show"
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.delete
  end

  private
  def workout_params
    params.require(:workout).permit(:title, :description, :calendar_id, :time, :dayornight)
  end
end
