class BorrowedSerializer < ActiveModel::Serializer
    attributes :borrower, :tool, :owner

    def borrower
        "#{self.object.borrower.username}"
    end

    def tool
        "#{self.object.tool.name}"
    end

    def owner
        "#{self.object.tool.owner.username}"
    end

end
  