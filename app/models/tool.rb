class Tool < ApplicationRecord

    has_many :rentals    
    
    has_many :borrowers, through: :rentals

    belongs_to :owner, class_name: "User"

    validates :name, presence: true
    validates :owner_id, presence: true

end
