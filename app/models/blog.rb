class Blog < ApplicationRecord
  belongs_to :user
  has_many :comments

  has_many :commenters, through: :comments, class_name: "User"
end
