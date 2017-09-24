class AddWorkoutFromPaths < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :path_id, :integer
  end
end
