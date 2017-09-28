class RemoveArr < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :arr_events
  end
end
