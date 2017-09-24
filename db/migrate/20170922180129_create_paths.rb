class CreatePaths < ActiveRecord::Migration[5.1]
  def change
    create_table :paths do |t|
      t.integer :starting_lat, null: false
      t.integer :starting_lng, null: false
      t.integer :ending_lat, null: false
      t.integer :ending_lng, null: false
      t.integer :distance
      t.integer :user_id, null: false
      t.integer :workout_id, null: false
      t.timestamps
    end
  end
end
