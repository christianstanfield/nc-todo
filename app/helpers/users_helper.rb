module UsersHelper

  def authorized?
    redirect_to root unless current_user
  end

  def current_user
    User.find(session[:user_id])
  end
end
