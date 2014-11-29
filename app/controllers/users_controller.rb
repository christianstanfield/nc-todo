class UsersController < ApplicationController
  include UsersHelper
  before_filter :authorized?, only: [:show]

  def new
  end

  def create
    @user = User.new(user_params) # overwrites id, is this a problem? 
    @user.id_nc = user_params[:id]
    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      @new_user_errors = @user.errors.messages # come back to this
      # p @new_user_errors
      render 'sessions/new'
    end
  end

  def show
    @user = current_user
  end

  private

  def user_params
    params.permit(:id, :email, :api_token)
  end
end
