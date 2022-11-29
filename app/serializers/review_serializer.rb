class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :property_id
  has_one :user
  has_one :property
end
