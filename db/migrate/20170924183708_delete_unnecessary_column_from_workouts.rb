class DeleteUnnecessaryColumnFromWorkouts < ActiveRecord::Migration[5.1]
  def change
    remove_column :workouts, :route_id
  end
end
