require_relative '../llm_queries/product_metadata_suggestion'
require_relative '../llm_queries/product_metadata_change'
require_relative '../utils/redis_keys'

class AiAssistantService
  def get_product_suggestion(product)
    id = product['id']

    existing_suggestion = AiProductMetadataSuggestion.find_by(product_id: id)

    if existing_suggestion
      Rails.logger.info "Suggestion was already generated for #{id}. Returning cached version #{existing_suggestion.to_json}"
      return { suggestion: existing_suggestion.suggestion, status: 'done' }
    end

    redis_key = RedisKeys.product_suggestion(id)

    if $redis.get(redis_key)
      Rails.logger.info "Currently processing #{redis_key}"

      { suggestion: nil, status: 'processing' }
    else
      messages = [
        { 'role' => 'system', 'content' => ProductMetadataSuggestion.get_system_message(product) },
        { 'role' => 'user', 'content' => ProductMetadataSuggestion.get_user_message },
      ]

      AiAssistantWorker.perform_async('suggestion', id, messages)

      $redis.setex(redis_key, 600, true)

      { suggestion: nil, status: 'processing' }
    end
  end

  def apply_product_suggestion(product)
    id = product['id']

    existing_change = AiProductMetadataChange.find_by(product_id: id)

    if existing_change
      Rails.logger.info "Change was already generated for #{id}. Returning cached version #{existing_change.to_json}"
      return { description: existing_change.description, status: 'done' }
    end

    existing_suggestion = AiProductMetadataSuggestion.find_by(product_id: id)

    unless existing_suggestion
      raise "Could not find existing suggestion for #{id}. Aborting"
    end

    redis_key = RedisKeys.product_change(id)

    if $redis.get(redis_key)
      Rails.logger.info "Currently processing #{redis_key}"

      { description: nil, status: 'processing' }
    else
      product_description = product['description']
      description_suggestion = existing_suggestion['suggestion']['description']
      description_overview = description_suggestion['overview']
      description_suggestion_items = description_suggestion['suggestions']

      messages = [
        { 'role' => 'system', 'content' => ProductMetadataChange.get_system_message(product_description) },
        { 'role' => 'user', 'content' => ProductMetadataChange.get_user_message(description_overview, description_suggestion_items) },
      ]

      AiAssistantWorker.perform_async('change', id, messages)

      $redis.setex(redis_key, 600, true)

      { description: nil, status: 'processing' }
    end
  end
end
