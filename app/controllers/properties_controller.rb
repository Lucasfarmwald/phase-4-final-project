class PropertiesController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :create]

    def index
        # return render json: { error: "Not logged in" }, status: :unauthorized unless session.include? :user_id
        properties = Property.all

        render json: properties
    end

    def create
        @property = Properties.create!(property_params)
        render json: @property
    end

    def show
        properties = Property.find(params[:id])

        render json: properties
    end
    private

    def property_params
        params.permit(:title, :address, :description, :image_url)
    end
   
end
