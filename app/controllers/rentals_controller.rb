class RentalsController < ApplicationController

    #get /rentals - get all rentals
    def index
        rentals = Rental.all
        render json: rentals, include: ['borrower', 'tool', 'tool.owner' ], status: :ok
    end

    # get "/users/:user_id/borrowed" - gets rentals Borrowed from Neighbors
    def user_borrowed
        user = User.find_by(id: params[:user_id])
        borrowed = user.borrowed_rentals_sorted
        render json: borrowed, include: ['borrower', 'tool', 'tool.owner'], status: :ok 
    end

    # get "/users/:user_id/lent" - gets rentals Lended out to neighbors
    def user_lent
        user = User.find_by(id: params[:user_id])
        lent_rentals = user.lent_rentals_sorted
        render json: lent_rentals, include: ['borrower', 'tool', 'tool.owner'], status: :ok 
    end

    # post /rentals -create a new rental 
    def create
        tool = Tool.find_by(id: params[:tool_id])
        tool.update(rented: true)
        rental = Rental.create!(rental_params)
        render json: rental, status: :created
    end

    # patch /rentals/:id - update a rental 
    def update
        rental = Rental.find_by(id: params[:id])
        if params[:returned] === true
            tool = Tool.find_by(id: rental.tool_id)
            tool.update(rented: false)
        end
        rental.update(edit_params)
        render json: rental, status: :ok
    end

    def search
        render json: Rental.search(params[:search_term]), status: :ok
    end

    private

    def rental_params
        params.permit(:tool_id, :borrower_id, :returned, :borrower_notes, :owner_notes)
    end

    def edit_params
        params.permit(:returned, :borrower_notes, :owner_notes)
    end

end
