class AddDescriptionToTodos < ActiveRecord::Migration[5.1]
  def change
    #method     table   column         datatype
    add_column  :todos, :description, :string
  end
end
