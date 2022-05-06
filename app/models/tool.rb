class Tool < ApplicationRecord
    # similar to Post

    has_many :rentals    
    
    has_many :borrowers, through: :rentals

    belongs_to :owner, class_name: "User"

end
