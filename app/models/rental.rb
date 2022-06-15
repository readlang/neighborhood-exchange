class Rental < ApplicationRecord
        
    belongs_to :tool, class_name: "Tool" 
    belongs_to :borrower, class_name: "User"


    def self.search(search_term)
        owner = search_term.split("-")[0]
        borrower = search_term.split("-")[1]
        self.all.filter{|rental| rental.borrower.username.downcase == borrower.downcase && rental.tool.owner.username.downcase == owner.downcase }
    end
end
