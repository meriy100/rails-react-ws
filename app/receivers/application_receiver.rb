class ApplicationReceiver
  attr_reader :current_user, :channel_name

  def initialize(current_user, channel_name)
    @current_user = current_user
    @channel_name = channel_name
  end

  def broadcast(data)
    ActionCable.server.broadcast(channel_name, data)
  end
end
