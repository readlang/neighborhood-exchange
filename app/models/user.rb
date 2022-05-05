class User < ApplicationRecord

    has_many :rentals, foreign_key: :borrower_id
    has_many :tools, foreign_key: :owner_id

    has_many :tools, through: :rentals

end
