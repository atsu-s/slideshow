class CreateShares < ActiveRecord::Migration[6.0]
  def change
    create_table :shares do |t|

      t.text       :text, null: false
      t.references :slide, null: false, foreign_key: true

      t.timestamps
    end
  end
end
