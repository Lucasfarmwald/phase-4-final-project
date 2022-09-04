class ReviewsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]
    def index
        reviews = Review.all

        render json: reviews
    end

    def create
       
        @review = Review.create!(review_params)
        
        render json: @review, status: 200
    end
    
    def destroy
        Review.find(params[:id]).destroy
    end

    private

    def review_params
        params.permit(:review, :property_id, :user_id)
    end
    def authorize
        return render json: { error: "Not logged-in" }, status: :unauthorized unless session.include? :user_id
    end
end
