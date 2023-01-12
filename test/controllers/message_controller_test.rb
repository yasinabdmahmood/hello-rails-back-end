require 'test_helper'

class MessageControllerTest < ActionDispatch::IntegrationTest
  test 'should get get_random_message' do
    get message_get_random_message_url
    assert_response :success
  end
end
