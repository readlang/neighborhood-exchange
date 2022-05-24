class RentalSerializer < ActiveModel::Serializer
  attributes :id, :tool_id, :borrower_id, :returned, :borrower_notes, :owner_notes, :borrower, :tool, :owner

  def borrower  
    "#{self.object.borrower.username}"
  end

  def tool
    "#{self.object.tool.name}"
  end

  def owner
    "#{self.object.tool.owner.username}"
  end

  belongs_to :borrower

end


