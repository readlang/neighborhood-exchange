class ToolSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :owner_id, :image, :notes, :rented, :borrower_count, :unique_borrower_count

  belongs_to :owner

  def borrower_count
    object.borrowers.length
  end
  
  def unique_borrower_count
    object.borrowers.uniq.length
  end

  # "object" functions similarly to self - here it refers to a tool instance

end
