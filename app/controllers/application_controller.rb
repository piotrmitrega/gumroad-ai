class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  layout 'application'

  # Returns the currently logged in user
  # @return [User, nil]
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  def authenticate_user!
    unless logged_in?
      Rails.logger.warn "Unauthorized"
      head :unauthorized and return
    end
  end
end
