class UpdateCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :characters, :vehicle_id, :integer
  end
end
