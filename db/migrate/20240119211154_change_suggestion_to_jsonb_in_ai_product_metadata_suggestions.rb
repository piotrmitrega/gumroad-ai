class ChangeSuggestionToJsonbInAiProductMetadataSuggestions < ActiveRecord::Migration[7.1]
  def up
    change_column :ai_product_metadata_suggestions, :suggestion, 'jsonb USING CAST(suggestion AS jsonb)'
  end

  def down
    change_column :ai_product_metadata_suggestions, :suggestion, :text
  end
end
