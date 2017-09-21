class ReallyAddColumnsToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :time, :integer
    add_column :workouts, :dayornight, :string
  end
end
