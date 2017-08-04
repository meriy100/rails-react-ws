class Api::SessionController < ApplicationController
  def create
    @user = login(params[:email], params[:password])
  end

  def destory
  end
end
