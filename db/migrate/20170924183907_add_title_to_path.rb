class AddTitleToPath < ActiveRecord::Migration[5.1]
  def change
    add_column :paths, :title, :string
  end
end
