Sidekiq.configure_server do |config|
  config.redis = { url: ENV['REDISCLOUD_URL'] }

  if defined?(Rails)
    config.logger = Rails.logger
  end
end

Sidekiq.configure_client do |config|
  config.redis = { url: ENV['REDISCLOUD_URL'] }
end
