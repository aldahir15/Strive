class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      p "YOU GOT HERE"
      render "api/users/show"
    else
      render json: "invalid login credentials"
    end
  end

  def destroy
    if current_user
      logout
    else
      render :json => {:error => "Not Logged In"}.to_json, :status => 404
    end
  end
end
