class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :content
      t.string :author

      t.timestamps
    end
  end
end
