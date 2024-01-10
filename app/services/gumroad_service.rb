require 'httparty'

class GumroadService
  include HTTParty

  base_uri 'https://api.gumroad.com/v2'

  def initialize(access_token)
    puts "api key is #{access_token}"
    @access_token = access_token
  end

  def list_products
    response = self.class.get("/products", {
      body: { access_token: @access_token }
    });

    if response.success?
      JSON.parse(response.body)['products']
    else
      raise "Failed to fetch Gumroad products: #{response.code}"
    end
  end

end
