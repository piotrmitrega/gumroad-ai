class SlackService
  include HTTParty

  def self.send_message(text)
    webhook_url = ENV['SLACK_WEBHOOK_URL']
    return unless webhook_url

    response = post(webhook_url, body: { text: text }.to_json, headers: { 'Content-Type' => 'application/json' })

    if response.success?
      Rails.logger.info("SlackService: Message sent successfully")
    else
      Rails.logger.error("SlackService: Error sending message - #{response.body}")
    end
  end
end
