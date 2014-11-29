class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(id_nc: params[:id])
    # @user = User.new(user_params)
    if @user
      session[:user_id] = @user.id
      redirect_to @user
    else
      render 'sessions/new'
    end
  end

  def delete

  end

  private

  def user_params
    params.permit(:id, :email, :api_token)
  end
end
