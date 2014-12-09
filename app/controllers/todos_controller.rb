class TodosController < ApplicationController
  include UsersHelper
  # before_filter :authorized?, :set_gon

  def index
    @user = current_user
    @todo = Todo.new
  end

  def new
    @user = current_user
    @todo = Todo.new
  end

  def create
    @user = current_user
    @user.todos << Todo.new(todo_ajax_params)
    redirect_to user_todos_path(@user)
  end

  def edit
    @user = current_user
    @todo = Todo.find(params[:id])
    # render "todos/edit", layout: false # note this breaks json parsing
  end

  def update
    @user = current_user
    @todo = Todo.find(params[:id])
    @todo.update_attributes(todo_ajax_params)
    redirect_to user_todos_path(@user)
  end

  def destroy
    @user = current_user
    @user.todos.destroy(params[:id])
  end

  private

  def todo_ajax_params
    ajax_params = params.require(:todo)
    JSON.parse(ajax_params, symbolize_names: true)
  end

  def set_gon
    gon.api_token = session[:api_token]
    gon.user_id = session[:user_id]
  end
end
