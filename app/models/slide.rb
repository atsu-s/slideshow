class Slide < ApplicationRecord
  with_options presence: true do
    validates :title, length: { maximum: 20, message: "は20文字以内で入力して下さい" }
    validates :images
  end

  belongs_to :user
  has_many_attached :images
  has_many :share, dependent: :destroy
  has_many :comments, dependent: :destroy
end
