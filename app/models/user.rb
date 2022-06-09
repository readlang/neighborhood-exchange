class User < ApplicationRecord
    has_secure_password #used for Bcrypt to save pw as password_digest

    has_many :rentals, foreign_key: :borrower_id 

    has_many :borrowed_tools, through: :rentals, source: :tool 

    has_many :tools, foreign_key: :owner_id


    validates :username, presence: true, length: {in: 2..30 }

    def borrowed_rentals_sorted
        borrowed = []
        self.rentals.each do |rental|
            if rental.returned === false
                borrowed.unshift ( rental )
            else
                borrowed.push ( rental )
            end
        end
        return borrowed
    end

    def lent_rentals_sorted
        lent_rentals = []
        self.tools.each do |tool|
            tool.rentals.each do |rental|
                if rental.returned === false
                    lent_rentals.unshift( rental )
                else
                    lent_rentals.push( rental )    
                end
            end
        end
        return lent_rentals
    end
    
end
