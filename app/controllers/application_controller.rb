class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :current_user


  private 

  def current_user
    @current_user ||= session[:current_user_id] &&
    User.find_by(id: session[:current_user_id])
  end
end
