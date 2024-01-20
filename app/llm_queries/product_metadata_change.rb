module ProductMetadataChange
  def self.get_system_message(product_description)
    "You are a language model tasked with helping to improve product descriptions. Below is the original product description for a product listed on Gumroad. Your task is to review and rewrite this description based on the feedback and suggestions provided in the following user message. Make sure you're returning only the rewritten description. Your description must be in HTML format as the input.
INPUT_DESCRIPTION_START
#{product_description}
INPUT_DESCRIPTION_END"
  end

  def self.get_user_message(suggestion_overview, suggestion_items)
    "Here's my feedback on the product description: #{suggestion_overview}.Based on this, I have some specific suggestions for improvement:
#{suggestion_items.each_with_index.map { |item, index| "#{index + 1}. #{item}" }.join("\n")}

Can you rewrite the product description incorporating these suggestions and addressing the overall feedback?"
  end
end
