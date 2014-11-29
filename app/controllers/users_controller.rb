class UsersController < ApplicationController
  include UsersHelper
  before_filter :authorized?, only: [:show]

  def new
  end

  def create
    @user = User.new(id_nc: params[:id], email: params[:email], api_token: params[:api_token])
    # @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      @new_user_errors = @user.errors.messages
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
