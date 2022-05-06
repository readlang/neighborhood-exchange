class Rental < ApplicationRecord
    #similar to Post-Authoring

    
    belongs_to :tool, class_name: "Tool" #
    belongs_to :borrower, class_name: "User"

    

end
