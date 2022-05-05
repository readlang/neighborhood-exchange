class RentalSerializer < ActiveModel::Serializer
  attributes :id, :tool_id, :borrower_id, :returned, :borrower_notes, :owner_notes
end
