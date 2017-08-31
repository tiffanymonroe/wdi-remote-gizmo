class RemoveDetailsInTodos < ActiveRecord::Migration[5.1]
  def change
    remove_column :todos, :details, :string
  end
end
