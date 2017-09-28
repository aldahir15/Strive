class ChangeNameOfArr < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :arr_events, :arr_events
  end
end
