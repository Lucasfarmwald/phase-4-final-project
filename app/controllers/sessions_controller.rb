class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params["username"]).try(:authenticate, params["password"])
        
        if user
            session[:user_id] = user.id
            render json: {status: :created}
        else
            render json: { status: 401 }
        end
    end

   

    def logout
        reset_session
        render json: {status: 200, logged_out: true}
    end
end
