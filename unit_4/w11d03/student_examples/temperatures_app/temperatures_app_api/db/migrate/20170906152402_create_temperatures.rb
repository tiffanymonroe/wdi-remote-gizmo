class CreateTemperatures < ActiveRecord::Migration[5.1]
  def change
    create_table :temperatures do |t|
      t.integer :average_high_f
      t.integer :average_low_f

      t.timestamps
    end
  end
end
