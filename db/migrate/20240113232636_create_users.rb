class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :gumroad_id
      t.string :email
      t.string :gumroad_token

      t.timestamps
    end
  end
end
