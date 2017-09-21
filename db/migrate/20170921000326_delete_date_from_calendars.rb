class DeleteDateFromCalendars < ActiveRecord::Migration[5.1]
  def change
    remove_column :calendars, :day
  end
end
