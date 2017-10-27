class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(user_params[:email], user_params[:password])
    if user.nil?
      flash.now[:errors] = ['Invalid username & password']
      render :new
    else
      login!(user)
      redirect_to user_url(user)
    end
  end

  def destroy
    logout!
    redirect_to bands_url
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
