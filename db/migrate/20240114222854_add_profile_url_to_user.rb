class AddProfileUrlToUser < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :profile_url, :string
  end
end
