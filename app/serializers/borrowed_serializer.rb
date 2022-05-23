class BorrowedSerializer < ActiveModel::Serializer
    
    attributes :summary

    def summary
        "this is what I want to return"
    end
end
  