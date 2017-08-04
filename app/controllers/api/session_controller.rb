class Api::SessionController < ApplicationController
  def show
    if current_user
      render json: { email: current_user.email }
    else
      render json: { message: "ログインしてください" }, status: 404
    end
  end

  def create
    @user = login(session_params[:email], session_params[:password])
    render json: { email: @user.email }
  end

  def destroy
    logout
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
