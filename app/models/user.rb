class User < ApplicationRecord
    has_secure_password

    has_many :rentals, foreign_key: :borrower_id 

    has_many :borrowed_tools, through: :rentals, source: :tool #

    has_many :tools, foreign_key: :owner_id

    

end
