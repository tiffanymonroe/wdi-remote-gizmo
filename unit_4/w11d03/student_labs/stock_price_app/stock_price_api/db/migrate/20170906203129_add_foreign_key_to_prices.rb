class AddForeignKeyToPrices < ActiveRecord::Migration[5.1]
  def change
    add_column :prices, :stock_id, :integer
  end
end
