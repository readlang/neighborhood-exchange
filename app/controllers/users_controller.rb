class UsersController < ApplicationController
    
    # skip_before_action :authorize, only: :create

    # delete before deploying!!! - this shows all the users
    def index
        render json: User.all, status: :ok
    end

    # for new signups - creates new user and sets session
    def create
        user = User.create(params.permit(:username, :password, :password_confirmation))
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # for return visits - checks for existing session cookie
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end
    end

end
