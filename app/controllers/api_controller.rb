class ApiController < ApplicationController
  before_action :set_gumroad_service

  def products
    puts "eluwina"
    @products = @gumroad_service.list_products
    render json: @products
  end

  private

  def set_gumroad_service
    @gumroad_service = GumroadService.new(ENV['GUMROAD_ACCESS_TOKEN'])
  end
end
