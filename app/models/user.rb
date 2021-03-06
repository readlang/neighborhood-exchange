class User < ApplicationRecord
    has_secure_password 

    has_many :rentals, foreign_key: :borrower_id 

    has_many :borrowed_tools, through: :rentals, source: :tool 

    has_many :tools, foreign_key: :owner_id

    validates :username, presence: true, length: {in: 2..30 }

    def borrowed_rentals_sorted
        borrowed = []
        self.rentals.each{ |rental| rental.returned ? borrowed.push(rental) : borrowed.unshift(rental)  }
        return borrowed
    end

    def lent_rentals_sorted
        lent_rentals = []
        self.tools.each do |tool|
            tool.rentals.each{|rental| rental.returned ? lent_rentals.push(rental) : lent_rentals.unshift(rental)  }
        end
        return lent_rentals
    end
end