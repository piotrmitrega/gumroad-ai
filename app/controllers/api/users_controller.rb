class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def me
    render json: @current_user.as_json(except: [:gumroad_token])
  end
end
