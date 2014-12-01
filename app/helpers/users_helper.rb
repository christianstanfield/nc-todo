module UsersHelper

  def authorized?
    redirect_to root_path unless session[:user_id]
  end

  def current_user
    User.find(session[:user_id])
  end
end
