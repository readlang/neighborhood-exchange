class RentalsController < ApplicationController

    def index
        rentals = Rental.all
        render json: rentals, status: :ok
    end

end
