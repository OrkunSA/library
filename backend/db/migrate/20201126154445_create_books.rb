class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :published
      t.string :image
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
