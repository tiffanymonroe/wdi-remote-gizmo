class ChangeForeignKeyInPrices < ActiveRecord::Migration[5.1]
  def change
    remove_column :prices, :stock_id
  end
end
