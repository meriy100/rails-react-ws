class UsersReceiver < ApplicationReceiver
  def index
    users = User.order(created_at: :asc)
    broadcast(type: 'SET_USERS', payload: users.map{|u| {email: u.email}} )
  end
end
