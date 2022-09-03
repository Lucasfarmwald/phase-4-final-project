class SessionsController < ApplicationController

    def create
       
        user = User.find_by(username: params["username"]).try(:authenticate, params["password"])
        
        if user
            session[:user_id] = user.id
           
            render json: {status: :created}
        else
            render json: { error: "Invalid username or password" }, status: 402
        end
    end

   

    def destroy
        reset_session
        render json: {status: 200, logged_out: true}
    end
end
