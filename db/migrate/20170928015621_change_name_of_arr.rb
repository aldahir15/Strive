class ChangeNameOfArr < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :event_ids, :arr_events
  end
end
