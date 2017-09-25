class AddMonthAndYearToCalendar < ActiveRecord::Migration[5.1]
  def change
    add_column :calendars, :month, :integer
    add_column :calendars, :year, :integer
  end
end
