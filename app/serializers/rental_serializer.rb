class RentalSerializer < ActiveModel::Serializer
  attributes :id, :tool_id, :borrower_id, :returned, :borrower_notes, :owner_notes  # :borrower_name, :tool_name, :owner

  belongs_to :borrower  
  belongs_to :tool

  # def borrower_name  
  #   self.object.borrower.username
  # end

  # def tool_name
  #   self.object.tool.name
  # end

  # def owner
  #   self.object.tool.owner.username
  # end

  

end


