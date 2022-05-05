class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :profile_image, :location
end
