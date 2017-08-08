class ApplicationReceiver
  attr_reader :current_user, :channel_name, :data

  def initialize(current_user, channel_name, data)
    @current_user = current_user
    @channel_name = channel_name
    @data = ActionController::Parameters.new(data)
  end

  def broadcast(data)
    ActionCable.server.broadcast(channel_name, data)
  end

  def broadcast_to(data)
    ActionCable.server.broadcast("user_#{current_user.id}", data)
  end
end
