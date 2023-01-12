class MessageController < ApplicationController
  def random_message
    p 'oooooooooooooooooooooo'
    message = Message.order('RANDOM()').first
    render json: { greeting: message.content }
  end
end
