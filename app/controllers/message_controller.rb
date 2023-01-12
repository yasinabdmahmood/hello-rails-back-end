class MessageController < ApplicationController
  def random_message
    message = Message.order('RANDOM()').first
    render json: { greeting: message.content }
  end
end
