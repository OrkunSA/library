class BooksController < ApplicationController
    def index 
        @books = Book.all 
        render json: @books, except: [:created_at, :updated_at]
    end

    def create 
        @book = Book.create(book_params)
        if @book.save 
        render json: @book, except: [:created_at, :updated_at]
        else 
            render json: {error: 'Could not be created'}
        end
    end

    def destroy 
        @book = Book.find(params[:id])
        @book.destroy 
        render json: {message: "Successfully deleted #{book.title}!"}
    end



    private 

    def book_params
        params.require(:book).permit(:title, :author, :published, :image, :category_name)
    end
    
end
