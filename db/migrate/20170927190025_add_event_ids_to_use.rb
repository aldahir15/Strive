class AddEventIdsToUse < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :arr_events, :integer, array: true, default: []
  end
end
