class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :profile_image
      t.string :location

      t.timestamps
    end
  end
end
