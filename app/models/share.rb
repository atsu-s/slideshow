class Share < ApplicationRecord
  validates :text, presence: true, length: { maximum: 100 }
  validates :slide, uniqueness: true

  belongs_to :slide
end
