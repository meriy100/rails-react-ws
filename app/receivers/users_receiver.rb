class UsersReceiver < ApplicationReceiver
  def index
    users = User.order(created_at: :asc)
    broadcast_to(type: 'SET_USERS', payload: users.map{|u| { id: u.id, email: u.email, name: u.name } } )
  end

  def create
    user = User.create!(user_params.merge(password: 'password'))
    broadcast_to(type: 'SET_USER',
      payload: { id: user.id, email: user.email, name: user.name },
      notify: { type: 'success', message: "#{user.name}を作成しました" },
      next_location: { pathname: "/users/#{user.id}" } )
  end

  def destroy
    raise StandardError.new('自分自身は削除できません') if find_user.id == current_user.id
    find_user.destroy!
    broadcast_to(type: 'SET_USER',
      payload: {},
      notify: { type: 'success', message: "#{find_user.name}を削除しました" } )
  end

  def subbradcast
    users = User.all
    broadcast(type: 'SET_USERS',
      payload: users.map{|u| { id: u.id, email: u.email, name: u.name } })
  end

  private

  def find_user
    @user ||= User.find(data[:id])
  end

  def user_params
    data.require(:user).permit(:email, :name)
  end
end
