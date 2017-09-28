class AddDatesToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :day, :integer
    add_column :events, :month, :integer
    add_column :events, :year, :integer
  end
end
