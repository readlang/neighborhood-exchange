class ToolSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :owner_id, :image, :notes

  belongs_to :owner

end
