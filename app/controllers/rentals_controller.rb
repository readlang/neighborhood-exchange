class RentalsController < ApplicationController

    #get /rentals - get all rentals
    def index
        rentals = Rental.all
        render json: rentals, status: :ok
    end

    # get "/users/:user_id/borrowed"
    def user_borrowed
        user = User.find_by(id: params[:user_id])
        borrowed = user.rentals
        render json: borrowed, status: :ok
    end

    # get "/users/:user_id/lent"
    def user_lent
        user = User.find_by(id: params[:user_id])
        owned_tools = user.tools #returns a "collection"
        lent = owned_tools.rentals #goes astray - need some sort of loop
        render json: lent, status: :ok
    end


    # post /rentals -create a new rental
    def create
        rental = Rental.create!(rental_params)
        render json: rental, status: :created
    end

    # patch /rentals/:id - update a rental
    def update
        rental = Rental.find_by(id: params[:id])
        rental.update(edit_params)
        render json: rental, status: :ok
    end

    private

    def rental_params
        params.permit(:tool_id, :borrower_id, :returned, :borrower_notes, :owner_notes)
    end

    def edit_params
        params.permit(:returned, :borrower_notes, :owner_notes)
    end

end
