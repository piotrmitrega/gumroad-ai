class CreateAiProductMetadataSuggestions < ActiveRecord::Migration[7.1]
  def change
    create_table :ai_product_metadata_suggestions do |t|
      t.text :product_id
      t.text :suggestion

      t.timestamps
    end
  end
end
