class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(id_nc: session_params[:id])
    if @user
      session[:user_id] = @user.id
      redirect_to @user
    else
      render 'sessions/new'
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end

  private

  def session_params
    params.permit(:id, :email, :api_token)
  end
end
