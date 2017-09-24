class RemoveLatsAndLons < ActiveRecord::Migration[5.1]
  def change
    remove_column :paths, :starting_lat
    remove_column :paths, :starting_lng
    remove_column :paths, :ending_lat
    remove_column :paths, :ending_lng
  end
end
