class CreateFacilities < ActiveRecord::Migration[6.0]
  def change
    create_table :facilities do |t|
      t.string :name
      t.string :category
      t.string :profile

      t.timestamps
    end
  end
end
