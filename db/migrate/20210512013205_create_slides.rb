class CreateSlides < ActiveRecord::Migration[6.0]
  def change
    create_table :slides do |t|

      t.string     :title, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end
