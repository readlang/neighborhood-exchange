class CreateTools < ActiveRecord::Migration[6.1]
  def change
    create_table :tools do |t|
      t.string :name
      t.string :brand
      t.integer :owner_id
      t.string :image
      t.string :notes

      t.timestamps
    end
  end
end
