class CreateLedgers < ActiveRecord::Migration[5.1]
  def change
    create_table :ledgers do |t|
      t.integer :trader_id
      t.integer :commodity_id
      t.integer :qty

      t.timestamps
    end
  end
end
