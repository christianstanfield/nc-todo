class UsersController < ApplicationController

  def new
  end

  def create
    @user = User.new(session_params)
    @user.save
    session[:user_id] = @user.id
    session[:api_token] = @user.api_token

    redirect_to user_todos_path(@user)
  end

  private

  def session_params
    user_params = params.require(:user)
    JSON.parse(user_params, symbolize_names: true)
  end
end
