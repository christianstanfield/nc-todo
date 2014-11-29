class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :id_nc
      t.string :email
      t.string :api_token

      t.timestamps
    end
  end
end
