class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description
      t.integer :user_id
      t.integer :calendar_id
      t.timestamps
    end
  end
end
