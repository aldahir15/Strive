class AddLatsAndLons < ActiveRecord::Migration[5.1]
  def change
    add_column :paths, :starting_lat, :float
    add_column :paths, :starting_lng, :float
    add_column :paths, :ending_lat, :float
    add_column :paths, :ending_lng, :float
  end
end
