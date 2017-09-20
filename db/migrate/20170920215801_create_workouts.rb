class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.string :title, null: false
      t.string :description
      t.integer :user_id, null: false
      t.integer :calendar_id, null: false
      t.timestamps
    end
  end
end
