class SessionsController < ApplicationController
   skip_before_action :authenticate_user, only: [:create]
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
        session.delete(:user_id)
    end
end
