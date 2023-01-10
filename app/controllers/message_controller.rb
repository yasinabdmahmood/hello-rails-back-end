class MessageController < ApplicationController
  def get_random_message
    message = Message.order('RANDOM()').first
    render json: { greeting: message.content }
  end
end
