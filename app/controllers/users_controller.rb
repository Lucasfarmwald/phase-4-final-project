class UsersController < ApplicationController

    def index
        users = User.all

        render json: users
    end
    
    def create
  
        user = User.create!(user_params)
        
        if user
            session[:user_id] = user.id
            render json: {
                status: :created 
            }
        else
            render json: { status: 500 }
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    

    def destroy
        @user.destroy
    end

      
    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
