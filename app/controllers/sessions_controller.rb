class SessionsController < ApplicationController
  include UsersHelper

  def new
  end

  def create
    @user = User.find_or_create_by(id: session_params[:id])
    @user.email = session_params[:email]
    @user.api_token = session_params[:api_token]
    @user.todos.destroy_all

    todos = session_params[:todos]
    todos.each do |todo|
      @user.todos << Todo.new(todo)
    end
    @user.save
    session[:user_id] = @user.id
    session[:api_token] = @user.api_token

    redirect_to user_todos_path(@user)
  end

  def destroy
    session.clear
    redirect_to root_path
  end

  private

  def session_params
    user_params = params.require(:user)
    JSON.parse(user_params, symbolize_names: true)
  end
end
