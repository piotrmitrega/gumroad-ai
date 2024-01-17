module Api
  class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:destroy]

    def create
      auth = request.env['omniauth.auth']
      user_info = auth.extra.raw_info.user

      Rails.logger.info "Signed in user: #{user_info.to_json}"

      user = User.find_or_initialize_by(gumroad_id: user_info.id)
      user.gumroad_token = auth.credentials.token
      user.email = user_info.email if user.email.blank?
      user.name = user_info.name if user.name.blank?
      user.profile_url = user_info.profile_url if user.profile_url.blank?

      SlackService.send_message("User #{user.name} (#{user.email}) has logged in")
      session[:user_id] = user.id
      redirect_to root_path
    end

    def destroy
      Rails.logger.info "Logging out..."
      session[:user_id] = nil

      render json: { message: 'Logged out successfully' }, status: :ok
    end
  end
end
