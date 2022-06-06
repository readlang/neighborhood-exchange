class User < ApplicationRecord
    has_secure_password #used for Bcrypt to save pw as password_digest

    has_many :rentals, foreign_key: :borrower_id 

    has_many :borrowed_tools, through: :rentals, source: :tool 

    has_many :tools, foreign_key: :owner_id


    validates :username, presence: true, length: {in: 2..30 }
    
end
