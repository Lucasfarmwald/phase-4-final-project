class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :description
      t.string :title
      t.string :image_url

      t.timestamps
    end
  end
end
