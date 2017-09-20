class CreateCalendars < ActiveRecord::Migration[5.1]
  def change
    create_table :calendars do |t|
      t.integer :user_id, null: false
      t.date :day, null: false
      t.timestamps
    end
  end
end
