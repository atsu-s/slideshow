class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true

   extend ActiveHash::Associations::ActiveRecordExtensions 
   validates :sex_id, numericality: { other_than: 1 }
       
   belongs_to :sex
end
