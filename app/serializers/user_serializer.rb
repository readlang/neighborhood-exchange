class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_image, :location
end


#removed: :password_digest from attributes