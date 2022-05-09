class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_image, :location
end
