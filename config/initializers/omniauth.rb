
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :gumroad, ENV['GUMROAD_APP_ID'], ENV['GUMROAD_APP_SECRET'], scope: 'view_profile view_sales'
end
