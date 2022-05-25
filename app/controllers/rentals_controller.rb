class RentalsController < ApplicationController

    #get /rentals - get all rentals
    def index
        rentals = Rental.all
        render json: rentals, include: ['borrower', 'tool', 'tool.owner' ], status: :ok
    end

    # get "/users/:user_id/borrowed" - gets rentals Borrowed from Neighbors
    def user_borrowed
        user = User.find_by(id: params[:user_id])
        borrowed = user.rentals
        render json: borrowed, include: ['borrower', 'tool', 'tool.owner'], status: :ok #deleted custom serializer - "each_serializer: BorrowedSerializer,"
    end

    # get "/users/:user_id/lent" - gets rentals Lended out to neighbors
    def user_lent
        user = User.find_by(id: params[:user_id])
        owned_tools = user.tools #returns a "collection"
        lent_rental = []
        owned_tools.each do |tool|
            tool.rentals.each do |rental|
                lent_rental.push( rental )
            end
        end
        render json: lent_rental, include: ['borrower', 'tool', 'tool.owner'], status: :ok 
    end


    # post /rentals -create a new rental --------------------------------------- add code to find tool, update tool
    def create
        rental = Rental.create!(rental_params)
        render json: rental, status: :created
    end

    # patch /rentals/:id - update a rental -------------------------------------add code to find tool, return tool
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
