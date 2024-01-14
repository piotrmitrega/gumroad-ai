class Api::SessionsController < ApplicationController
  def create
    auth = request.env['omniauth.auth']
    user_info = auth.extra.raw_info.user

    Rails.logger.info "Signed in user: #{user_info.to_json}"

    user = User.find_or_create_by(:gumroad_id => auth.info.id) do |u|
      u.gumroad_id = user_info.id
      u.gumroad_token = auth.credentials.token
      u.email = user_info.email
      u.name = user_info.name
    end

    SlackService.send_message("User #{user.name} (#{user.email}) has logged in")

    session[:user_id] = user.id

    redirect_to root_path, notice: 'Signed in successfully.'
  end

  def destroy
    Rails.logger.info "Logging out..."
    reset_session
    redirect_to login_path, notice: 'You have been logged out.'
  end
end
