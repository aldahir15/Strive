class DeleteColumnsFromCalendar < ActiveRecord::Migration[5.1]
  def change
    remove_column :calendars, :time
    remove_column :calendars, :dayornight
  end
end
