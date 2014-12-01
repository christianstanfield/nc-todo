class SessionsController < ApplicationController
  include UsersHelper

  def new
  end

  def create
    @user = User.find_or_create_by(id: session_params[:id])
    @user.email = session_params[:email]
    @user.api_token = session_params[:api_token]

    @todos = session_params[:todos]
    # @todos.each do |todo|
      # Come back to me!
    # end

    @user.save
    session[:user_id] = @user.id

    redirect_to @user
  end

  def destroy 
    @user = current_user
    session.clear
    render json: @user
  end

  private

  def session_params
    user_params = params.require(:user)
    JSON.parse(user_params, symbolize_names: true)
  end
end
