module Api
  module Ai
    class AiAssistantController < ApplicationController
      before_action :authenticate_user!
      before_action :set_assistant_service
      before_action :set_gumroad_service

      def product_suggestion
        product_id = params[:productId]

        product = @gumroad_service.get_product(product_id)
        result = @assistant_service.get_product_suggestion(product)
        render json: result
      end

      def product_rewrite
        product_id = params[:productId]

        product = @gumroad_service.get_product(product_id)
        result = @assistant_service.apply_product_suggestion(product)
        render json: result
      end

      def new_product
        product_id = params[:productId]

        product = @gumroad_service.get_product(product_id)
        products = @assistant_service.get_product_suggestion(product)
        render json: products
      end

      private

      def set_assistant_service
        @assistant_service = AiAssistantService.new
      end

      def set_gumroad_service
        token = @current_user.gumroad_token
        @gumroad_service = GumroadService.new(token)
      end
    end
  end
end
