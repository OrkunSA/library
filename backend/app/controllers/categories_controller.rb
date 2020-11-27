class CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render json: @categories.to_json(include: {books: {only: [:title, :author, :published, :image]}}, only: :title)
    end

    def show
        @category = Category.find(params[:id])
        render json: @category
    end
end
