class Api::SessionController < ApplicationController
  def show
    if logged_in?
      render json: { email: current_user.email }
    else
      render json: { message: "ログインしてください" }, status: 404
    end
  end

  def create
    if @user = login(session_params[:email], session_params[:password])
      render json: { email: @user.email }
    else
      render json: { message: "メールアドレスかパスワードが違います" }, status: 404
    end
  end

  # logout だと csrf もなくなるので
  def destroy
    session['user_id'] == nil
    @current_user = nil
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
