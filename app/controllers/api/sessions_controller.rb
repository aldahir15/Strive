class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      p "YOU GOT HERE"
      render "api/users/show"
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ["Not Logged In"], status: 404
    end
  end
end
