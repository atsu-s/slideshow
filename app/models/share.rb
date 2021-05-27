class Share < ApplicationRecord
  validates :text, presence: true, length: { maximum: 100, message: "は100文字以内で入力して下さい" }
  validates :slide, uniqueness: true

  belongs_to :slide
end
