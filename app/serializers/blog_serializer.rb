class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes, :dislikes
  has_one :user
end
