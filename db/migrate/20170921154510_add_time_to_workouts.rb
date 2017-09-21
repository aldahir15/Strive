class AddTimeToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :calendars, :time, :integer
    add_column :calendars, :dayornight, :string
  end
end
