class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true
  validates :password, format:{ with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i , message: "は半角英数のみ混合で入力して下さい"}

  has_many :slides

   extend ActiveHash::Associations::ActiveRecordExtensions 
   validates :gender_id, numericality: { other_than: 1, message: "を入力して下さい" }
       
   belongs_to :gender
   has_many :comments
end
