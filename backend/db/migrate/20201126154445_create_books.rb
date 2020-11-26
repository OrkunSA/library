class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :published
      t.string :image
      t.integer :category_id

      t.timestamps
    end
  end
end
