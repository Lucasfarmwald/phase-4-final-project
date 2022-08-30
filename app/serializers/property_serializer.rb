class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :description, :title, :image_url
  has_many :reviews
  # has_many :users
end
