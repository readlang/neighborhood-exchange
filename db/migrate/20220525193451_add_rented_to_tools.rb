class AddRentedToTools < ActiveRecord::Migration[6.1]
  def change
    add_column :tools, :rented, :boolean
  end
end
