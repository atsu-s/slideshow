class Comment < ApplicationRecord
  validates :comment_text, presence: true, length: {maximum: 100}

  belongs_to :user
  belongs_to :slide
end
