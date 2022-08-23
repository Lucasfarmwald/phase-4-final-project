class SessionsController < ApplicationController
    def login
        user = User.find_by(email: params[:user, :email])
        if user.authenticate(params[:password])
        render json: {message: "succesful login", user: user}, status: 200
        else
          render json: { error: "Invalid username and password" },status: :unprocessable_entity
        end
      end

    

      def destroy
        session.delete :user_id
        head :no_content
      end
    
end
