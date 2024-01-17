require_relative '../llm_queries/product_metadata'

class AiAssistantService
  def create_open_ai_service
    OpenAiService.new(ENV['OPENAI_ACCESS_TOKEN'])
  end

  def get_product_suggestion(product)
    id = product['id']

    existing_suggestion = AiProductMetadataSuggestion.find_by(product_id: id)

    if existing_suggestion
      Rails.logger.info "Suggestion was already generated for #{id}. Returning cached version #{existing_suggestion.to_json}"
      return existing_suggestion.suggestion
    end

    messages = [
      { role: 'system', content: get_product_metadata_llm_system_message(product) },
      { role: 'user', content: get_product_metadata_llm_user_message },
    ]

    Rails.logger.info "Generating response for the product #{id} and following messages #{messages.to_json}"

    response_text = create_open_ai_service.generate_text(messages)

    suggestion_record = AiProductMetadataSuggestion.create(product_id: id, suggestion: response_text)

    unless suggestion_record.save
      raise "Did not save suggestion to database"
    end

    Rails.logger.info "Generated suggestion and successfully stored in db"

    response_text
  end
end
