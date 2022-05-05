class Tool < ApplicationRecord

    has_many :rentals
    belongs_to :owner, class_name: "User"

    has_many :borrowers, class_name: "User", through: :rentals

end
