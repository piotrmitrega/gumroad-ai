module Api
  class GumroadController < ApplicationController
    before_action :authenticate_user!
    before_action :set_gumroad_service

    def products
      products = @gumroad_service.list_products
      render json: products
    end

    def sales
      sales = @gumroad_service.list_sales
      render json: sales
    end

    private

    def set_gumroad_service
      token = @current_user.gumroad_token
      @gumroad_service = GumroadService.new(token)
    end
  end
end
