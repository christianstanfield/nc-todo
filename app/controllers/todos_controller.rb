class TodosController < ApplicationController
  include UsersHelper
  before_filter :authorized?, :set_gon

  def index
    @user = current_user
  end

  def new
    @user = current_user
    @todo = Todo.new
  end

  def create
    @user = current_user
    if request.xhr?
      @user.todos.find_or_create_by(todo_ajax_params)
    else
      @user.todos << Todo.new(description: todo_params[:description], is_complete: false)
    redirect_to user_todos_path(@user)
    end
  end

  def edit
    @user = current_user
    @todo = Todo.find(params[:id])
  end

  def update
    @user = current_user
    @todo = Todo.find(params[:id])
    @todo.update_attributes(description: todo_params[:description])
    redirect_to user_todos_path(@user)
  end

  def destroy
  end

  private

  def todo_params
    params.require(:todo).permit(:description)
  end

  def todo_ajax_params
    ajax_params = params.require(:todo)
    JSON.parse(ajax_params, symbolize_names: true)
  end

  def set_gon
    gon.api_token = session[:api_token]
    gon.user_id = session[:user_id]
  end
end
