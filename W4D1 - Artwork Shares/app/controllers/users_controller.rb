class UsersController < ApplicationController
  def index
    render plain: "I'm in the index action!"
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user
    else
      render plain: "can't find user"
      User.all
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def new
    render plain: "I'm in the new action!"
  end

  def edit
    render plain: "I'm in the edit action!"
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user
      @user.update(user_params)
    else
      render "can't find user"
    end
    render json: @user
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user.destroy
      render json: @user
    else
      render plain: "can't find user, thus can't destroy. does not make sense."
    end

  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end



end
