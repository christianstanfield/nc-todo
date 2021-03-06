class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :description
      t.boolean :is_complete
      t.references :user, index: true

      t.timestamps
    end
  end
end
