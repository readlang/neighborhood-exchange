class Rental < ApplicationRecord

    belongs_to :tool
    belongs_to :borrower, class_name: "User"

end
