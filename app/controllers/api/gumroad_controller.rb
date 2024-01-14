class Api::GumroadController < ApplicationController
  before_action :set_gumroad_service

  def products
    @products = @gumroad_service.list_products
    render json: @products
  end

  def sales
    @sales = @gumroad_service.list_sales
    render json: @sales
  end

  def user
    @user = @gumroad_service.get_user
    render json: @user
  end

  private

  def set_gumroad_service
    unless logged_in?
      Rails.logger.info "Access attempt without login"
      head :unauthorized and return
    end

    token = @current_user.gumroad_token
    @gumroad_service = GumroadService.new(token)
  end
end
