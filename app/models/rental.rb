class Rental < ApplicationRecord
        
    belongs_to :tool, class_name: "Tool" 
    belongs_to :borrower, class_name: "User"

    validates :tool_id, presence: true
    validates :borrower_id, presence: true

end
