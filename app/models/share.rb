class Share < ApplicationRecord
  validates :text, presence: true
  validates :slide, uniqueness: true

  belongs_to :slide
end
