module RedisKeys
  def self.product_suggestion(id)
    "product_suggestion_processing:#{id}"
  end

  def self.product_change(id)
    "product_change_processing:#{id}"
  end
end
