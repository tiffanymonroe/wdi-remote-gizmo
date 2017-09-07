class CreateRosters < ActiveRecord::Migration[5.1]
  def change
    create_table :rosters do |t|
      t.references :playlist, foreign_key: true
      t.references :song, foreign_key: true
      t.integer :plays

      t.timestamps
    end
  end
end
