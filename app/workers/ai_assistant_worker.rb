require_relative '../utils/redis_keys'

class AiAssistantWorker
  include Sidekiq::Worker

  def perform(action, product_id, messages)
    case action
    when 'suggestion'
      process_suggestion(product_id, messages)
    when 'change'
      process_change(product_id, messages)
    else
      raise "Unknown action: #{action}"
    end
  end

  def create_open_ai_service
    OpenAiService.new(ENV['OPENAI_ACCESS_TOKEN'])
  end

  def process_suggestion(product_id, messages)
    redis_key = RedisKeys.product_suggestion(product_id)

    if AiProductMetadataSuggestion.exists?(product_id: product_id)
      Rails.logger.info "Suggestion already exists for product #{product_id}. Skipping job."
      return
    end

    begin
      Rails.logger.info "Generating get_product_suggestion response for the product #{product_id} and following messages #{messages.to_json}"

      response_text = create_open_ai_service.chat_completion(messages)

      suggestion_record = AiProductMetadataSuggestion.create(product_id: product_id, suggestion: JSON.parse(response_text))

      unless suggestion_record.save
        raise "Did not save suggestion to database"
      end

      Rails.logger.info "Generated suggestion and successfully stored in db"
    rescue => e
      Rails.logger.error "An error occurred: #{e.message}"
      raise e
    ensure
      $redis.del(redis_key)
    end
  end

  def process_change(product_id, messages)
    redis_key = RedisKeys.product_change(product_id)

    begin
      Rails.logger.info "Generating apply_product_suggestion response for the product #{product_id} and following messages #{messages.to_json}"

      response_text = create_open_ai_service.chat_completion(messages)

      change_record = AiProductMetadataChange.create(product_id: product_id, description: response_text)

      unless change_record.save
        raise "Did not save change to database"
      end

      Rails.logger.info "Generated change and successfully stored in db"
    rescue => e
      Rails.logger.error "An error occurred: #{e.message}"
      raise e
    ensure
      $redis.del(redis_key)
    end
  end
end
