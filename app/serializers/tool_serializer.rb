class ToolSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :owner_id, :image, :notes, :rented

  belongs_to :owner

end
