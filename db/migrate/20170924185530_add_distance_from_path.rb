class AddDistanceFromPath < ActiveRecord::Migration[5.1]
  def change
    add_column :paths, :distance, :float
  end
end
