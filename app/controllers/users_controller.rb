class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]

  # POST /users
  def create
  
    @user = User.create!(user_params)
    
    render json: @user, status: 200
  end

  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
