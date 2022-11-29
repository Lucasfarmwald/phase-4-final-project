class ReviewsController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index, :destroy]
    before_action :require_permission, only: [:destroy, :update]
    skip_before_action :authenticate_user, only: [:index, :update]
    
    def index
        reviews = Review.all

        render json: reviews
    end

    def create
       
        @review = Review.create!(review_params)
        
        render json: @review, status: 200
    end
    
    def destroy
      
       @review = Review.find(params[:id])
        
        @review.destroy!
    
        render json: review
    end

    def update
       
        @review = Review.find(params[:id])
        @review.update(review_params)
        
        
        render json: @review
    end

    private

    def review_params
    params.permit(:review, :user_id, :property_id) 
    end
    def require_permission
        if Review.find(params[:id]).user != current_user
        render json: {error: "not authorized"}
    end
    

    def authorize
        return render json: { error: "Not logged-in" }, status: :unauthorized unless session.include? :user_id
    end
    
end
end
