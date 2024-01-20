require_relative '../llm_queries/product_metadata_suggestion'
require_relative '../llm_queries/product_metadata_change'

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
      { role: 'system', content: ProductMetadataSuggestion.get_system_message(product) },
      { role: 'user', content: ProductMetadataSuggestion.get_user_message },
    ]

    Rails.logger.info "Generating get_product_suggestion response for the product #{id} and following messages #{messages.to_json}"

    response_text = create_open_ai_service.chat_completion(messages)

    suggestion_record = AiProductMetadataSuggestion.create(product_id: id, suggestion: JSON.parse(response_text))

    unless suggestion_record.save
      raise "Did not save suggestion to database"
    end

    Rails.logger.info "Generated suggestion and successfully stored in db"

    response_text
  end

  def apply_product_suggestion(product)
    id = product['id']

    existing_change = AiProductMetadataChange.find_by(product_id: id)

    if existing_change
      Rails.logger.info "Change was already generated for #{id}. Returning cached version #{existing_change.to_json}"
      return existing_change.description
    end

    existing_suggestion = AiProductMetadataSuggestion.find_by(product_id: id)

    unless existing_suggestion
      raise "Could not find existing suggestion for #{id}. Aborting"
    end

    product_description = product['description']
    description_suggestion = existing_suggestion['suggestion']['description']
    description_overview = description_suggestion['overview']
    description_suggestion_items = description_suggestion['suggestions']

    messages = [
      { role: 'system', content: ProductMetadataChange.get_system_message(product_description) },
      { role: 'user', content: ProductMetadataChange.get_user_message(description_overview, description_suggestion_items) },
    ]

    Rails.logger.info "Generating apply_product_suggestion response for the product #{id} and following messages #{messages.to_json}"

    response_text = create_open_ai_service.chat_completion(messages)

    change_record = AiProductMetadataChange.create(product_id: id, description: response_text)

    unless change_record.save
      raise "Did not save change to database"
    end

    Rails.logger.info "Generated change and successfully stored in db"

    response_text
  end
end
