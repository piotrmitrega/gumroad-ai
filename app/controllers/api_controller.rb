class ApiController < ApplicationController
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
    @gumroad_service = GumroadService.new(ENV['GUMROAD_ACCESS_TOKEN'])
  end
end
