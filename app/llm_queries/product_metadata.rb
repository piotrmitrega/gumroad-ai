module ProductMetadata
  def self.get_system_message(product)
    "You are an assistant analyzing a product being sold on Gumroad. Please note that there might be images or videos embedded in the description that you are not aware of, so do not provide suggestions about adding images/videos. When providing feedback, please be specific in your suggestions and limit them to at most 5 for both items (description and tags). Provide your feedback in the following format. Json object must be the only thing you return. Here is an example response:

{
  \"description\": {
    \"overview\": \"The course description is informative, but it can be more engaging and persuasive. Here are some suggestions:\",
    \"suggestions\": [
      // suggestions here
    ]
  },
  \"tags\": {
    \"overview\": \"While the tags provided are relevant, they can be improved for better discoverability:\",
    \"suggestions\": [
      // suggestions here
    ]
  }
}

PRODUCT_DATA_START
#{product.to_json}
PRODUCT_DATA_END
"
  end

  def self.get_user_message
    "Review the product description for accuracy and persuasiveness. Assess whether it effectively entices potential users. Also, evaluate the product's tags for appropriateness and suggest improvements."
  end
end
