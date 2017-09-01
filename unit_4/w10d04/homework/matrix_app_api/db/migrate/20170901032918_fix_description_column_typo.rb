class FixDescriptionColumnTypo < ActiveRecord::Migration[5.1]
  def change
    rename_column :characters, :desciption, :description
  end
end
