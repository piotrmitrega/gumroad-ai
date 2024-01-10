require 'httparty'

class GumroadService
  include HTTParty

  base_uri 'https://api.gumroad.com/v2'

  def initialize(access_token)
    @access_token = access_token
  end

  def get_user
    response = self.class.get("/user", {
      body: { access_token: @access_token }
    });

    if response.success?
      JSON.parse(response.body)['user']
    else
      raise "Failed to fetch Gumroad user: #{response.code}"
    end
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

  def list_sales
    response = self.class.get("/sales", {
      body: { access_token: @access_token }
    });

    if response.success?
      JSON.parse(response.body)['sales']
    else
      raise "Failed to fetch Gumroad sales: #{response.code}"
    end
  end

end
