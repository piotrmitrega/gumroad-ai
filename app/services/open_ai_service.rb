class OpenAiService
  include HTTParty
  base_uri 'https://api.openai.com/v1'

  def initialize(access_token)
    @access_token = access_token
  end

  def chat_completion(messages)
    headers = {
      "Content-Type" => "application/json",
      "Authorization" => "Bearer #{@access_token}"
    }

    body = {
      model: "gpt-3.5-turbo",
      messages: messages
    }.to_json

    response = self.class.post(
      '/chat/completions',
      headers: headers,
      body: body
    )

    if response.code == 200
      parsed_response = JSON.parse(response.body)
      content = parsed_response['choices'][0]['message']['content']
      Rails.logger.info "Generated response: #{content}"
      return content
    else
      raise StandardError, "OpenAI API request failed with status code: #{response.code}"
    end
  rescue JSON::ParserError => e
    raise StandardError, "Error parsing JSON response from OpenAI API: #{e.message}"
  end
end
