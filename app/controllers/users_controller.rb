class UsersController < ApplicationController

  def new
  end

  def create
    @user = User.new
    @user.id = session_params[:id]
    @user.email = session_params[:email]
    @user.api_token = session_params[:api_token]
    @user.todos = session_params[:todos]

    @user.save
    session[:user_id] = @user.id

    redirect_to user_todos_path(@user)
  end

  private

  def session_params
    user_params = params.require(:user)
    JSON.parse(user_params, symbolize_names: true)
  end
end
