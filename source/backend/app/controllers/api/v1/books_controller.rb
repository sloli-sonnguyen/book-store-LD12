$client = Mysql2::Client.new(:host => "localhost", :username => "sonnguyen", :password => "20184186", :database => "bookstoreDB")
module Api
    module V1
        
        class BooksController < ApplicationController
            def index
                books = $client.query("SELECT * FROM books,categorys, authors, languages
                                    where books.category_id = categorys.category_id
                                    and books.language_id = languages.language_id
                                    and books.author_id = authors.author_id
                                    ")
                render json: {status: 'SUCCESS', message:'Loaded books', data:books},status: :ok
            end

            def show
                book =  $client.query("SELECT * FROM books,categorys, authors, languages
                                        where books.category_id = categorys.category_id
                                        and books.language_id = languages.language_id
                                        and books.author_id = authors.author_id
                                        and books.book_id = #{params[:id]}
                                    ")
                render json: {status: 'SUCCESS', message:'Loaded book', data:book},status: :ok
            end
        
            def create
                book = Book.new(book_params)
        
                if book.save
                    render json: {status: 'SUCCESS', message:'Saved book', data:book},status: :ok
                else
                    render json: {status: 'ERROR', message:'book not saved', data:book.errors},status: :unprocessable_entity
                end
            end
        
            def destroy
                book = Book.find(params[:id])
                book.destroy
                render json: {status: 'SUCCESS', message:'Deleted book', data:book},status: :ok
            end
    
            def update
                book = Book.find(params[:id])
                if book.update_attributes(book_params)
                    render json: {status: 'SUCCESS', message:'Updated book', data:book},status: :ok
                else
                    render json: {status: 'ERROR', message:'book not updated', data:book.errors},status: :unprocessable_entity
                end
            end
        
            private
    
            def book_params
                params.permit(:book_id, :book_name)
            end
        end
    end
end