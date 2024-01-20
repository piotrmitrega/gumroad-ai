class CreateAiProductMetadataChanges < ActiveRecord::Migration[7.1]
  def change
    create_table :ai_product_metadata_changes do |t|
      t.string :product_id
      t.string :description

      t.timestamps
    end
  end
end
