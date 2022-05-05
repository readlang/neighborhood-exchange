class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.integer :tool_id
      t.integer :borrower_id
      t.boolean :returned
      t.string :borrower_notes
      t.string :owner_notes

      t.timestamps
    end
  end
end
