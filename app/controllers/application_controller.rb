class ApplicationController < ActionController::API
  include ActionController::Cookies

  # before_action :authorize # comment this out for early testing

  def authorize
    render json: {error: "not authorized"} unless session.include? :user_id
  end

end
