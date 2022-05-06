class RentalsController < ApplicationController

    def index
        render json: Rental.all, status: :ok
    end

end
