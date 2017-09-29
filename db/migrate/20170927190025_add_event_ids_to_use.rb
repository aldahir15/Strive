class AddEventIdsToUse < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :event_ids, :integer, array: true, default: []
  end
end
