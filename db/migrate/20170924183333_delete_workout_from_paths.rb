class DeleteWorkoutFromPaths < ActiveRecord::Migration[5.1]
  def change
    remove_column :paths, :workout_id
  end
end
