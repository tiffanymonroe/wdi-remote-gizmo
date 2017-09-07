class CreatePrices < ActiveRecord::Migration[5.1]
  def change
    create_table :prices do |t|
      t.decimal :avg_price
      t.integer :stock_id
      t.date :date

      t.timestamps
    end
  end
end
