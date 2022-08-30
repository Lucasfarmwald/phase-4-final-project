class ReviewsController < ApplicationController

    def index
        reviews = Review.all

        render json: reviews
    end

    def create
  
        @review = Review.create!(review_params)
        
        render json: @review, status: 200
      end

    private

    def review_params
        params.permit(:review, :property_id, :user_id)
    end
end
