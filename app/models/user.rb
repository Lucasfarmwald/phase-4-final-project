class User < ApplicationRecord
    has_secure_password # validates has password
    
    has_many :blogs
    has_many :comments
    has_many :commented_blogs, through: :comments, class_name: "Blog"
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
    
end
