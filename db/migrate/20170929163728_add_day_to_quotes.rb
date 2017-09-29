class AddDayToQuotes < ActiveRecord::Migration[5.1]
  def change
    add_column :quotes, :day, :integer, default: Date.today.day
  end
end
