class ApiChannel < ApplicationCable::Channel
  def subscribed
    stream_from "some_channel"
    stream_from "user_#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def get(data)
    UsersReceiver.new(current_user, "some_channel").index
  end

  def post(data)
    ActionCable.server.broadcast('some_channel', type: 'FOO', payload: { foo: current_user })
    ActionCable.server.broadcast("user_#{current_user.id}", type: 'test', payload: { foo: current_user })
  end
end
