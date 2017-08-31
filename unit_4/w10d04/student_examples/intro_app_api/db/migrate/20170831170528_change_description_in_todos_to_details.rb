class ChangeDescriptionInTodosToDetails < ActiveRecord::Migration[5.1]
  def change
    rename_column :todos, :description, :details
  end
end
