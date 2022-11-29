class PropertiesController < ApplicationController
    skip_before_action :authenticate_user, only: [:index]

    def index
        # return render json: { error: "Not logged in" }, status: :unauthorized unless session.include? :user_id
        properties = Property.all

        render json: properties
    end

    def show
        properties = Property.find(params[:id])

        render json: properties
    end

   
end
