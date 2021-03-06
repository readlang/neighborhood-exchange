class Tool < ApplicationRecord

    has_many :rentals    
    
    has_many :borrowers, through: :rentals

    belongs_to :owner, class_name: "User"

    validates :name, presence: true, length: {in: 2..30 }
    validates :brand, presence: true, length: {in: 2..30 }
    validates :owner, presence: true # checks if owner exists and that FK exists

    def self.all_sorted
        tools = []
        self.all.each{|tool| tool.rented ? tools.push(tool) : tools.unshift(tool) }
        return tools
    end

    def self.search(search_term)
        self.all.filter{|tool| tool.name.downcase.include?(search_term.downcase) || tool.brand.downcase.include?(search_term.downcase) || tool.owner.username.downcase.include?(search_term.downcase) }
    end
end