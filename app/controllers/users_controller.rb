class UsersController < ApplicationController
    skip_before_action :authorize, only: [ :create, :show ]

    
    def index
        render json: User.all, status: :ok
    end

    # SignUp - creates new user and sets session
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # return visits - checks for existing session cookie
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end
    end

    # patch /users/:id
    def update
        user = User.find_by(id: params[:id])
        user.update(edit_params)
        render json: user, status: :ok
    end

    def biggest_borrower
        render json: User.biggest_borrower, status: :ok
    end

    def borrowed_tools
        user = User.find_by!(id: params[:id])
        render json: user.unique_borrowed_tools, status: :ok
    end

    def search
        render json: User.search(params[:name]), status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :profile_image, :location)
    end

    def edit_params
        params.permit(:profile_image, :location) 
    end

end
