class NewDateFor < ActiveRecord::Migration[5.1]
  def change
    add_column :calendars, :day, :integer
  end
end
