class TodosController < ApplicationController
  include UsersHelper
  before_filter :authorized?

  def index
    @user = current_user
  end

  def new
    @user = current_user
  end

  def create
    @user = current_user
    @user.todos << Todo.new(description: todo_params[:description], is_complete: false)
    redirect_to user_todos_path(@user)
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def todo_params
    params.require(:todo).permit(:description)
  end
end
