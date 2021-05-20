class Share < ApplicationRecord
  validates :text, presence: true

  belongs_to :slide
end
