class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize # checks if session cookie includes user_id on every action (except where skipped)

  
  private

  def authorize
    return render json: {error: "not authorized"}, status: :unauthorized unless session.include? :user_id
  end

end
