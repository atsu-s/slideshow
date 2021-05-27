class Comment < ApplicationRecord
  validates :comment_text, presence: true, length: {maximum: 100, message: "は100文字以内で入力して下さい"}

  belongs_to :user
  belongs_to :slide
end
