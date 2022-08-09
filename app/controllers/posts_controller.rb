class PostsController < ApplicationController
    def index
        post = Post.all
        render json: post
    end

    def show
        post = Post.find(params[:id])
    end

    def create
        post = Post.new(post_params)

        if post.save
            render json: post, status: :created
        else
            
        end
    end



    private

    def post_params
        params.permit(:title, :content)
    end
end
