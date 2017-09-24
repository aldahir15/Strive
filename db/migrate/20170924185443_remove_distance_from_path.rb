class RemoveDistanceFromPath < ActiveRecord::Migration[5.1]
  def change
    remove_column :paths, :distance
  end
end
