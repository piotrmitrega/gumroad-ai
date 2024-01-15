class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]

  def create
    auth = request.env['omniauth.auth']
    user_info = auth.extra.raw_info.user

    Rails.logger.info "Signed in user: #{user_info.to_json}"

    user = User.find_or_create_by(:gumroad_id => auth.info.id) do |u|
      u.gumroad_id = user_info.id
      u.gumroad_token = auth.credentials.token
      u.email = user_info.email
      u.name = user_info.name
      u.profile_url = user_info.profile_url
    end

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
