class BooksController < ApplicationController
    def index 
        @books = Book.all 
        render json: @products, except: [:created_at, :updated_at]
    end
end
