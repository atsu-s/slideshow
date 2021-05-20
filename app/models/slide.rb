class Slide < ApplicationRecord
  with_options presence: true do
    validates :title
    validates :images
  end

  belongs_to :user
  has_many_attached :images
  has_one :share
end
