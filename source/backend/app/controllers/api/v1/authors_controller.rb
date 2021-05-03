module Api
    module V1
        class AuthorsController < ApplicationController
            def index
                authors = Author.all
                render json: {status: 'SUCCESS', message:'Loaded authors', data:authors},status: :ok
            end

            def show
                author = Author.find(params[:id])
                render json: {status: 'SUCCESS', message:'Loaded author', data:author},status: :ok
            end
        
            def create
                author = Author.new(author_params)
        
                if author.save
                    render json: {status: 'SUCCESS', message:'Saved author', data:author},status: :ok
                else
                    render json: {status: 'ERROR', message:'author not saved', data:author.errors},status: :unprocessable_entity
                end
            end
        
            def destroy
                author = Author.find(params[:id])
                author.destroy
                render json: {status: 'SUCCESS', message:'Deleted author', data:author},status: :ok
            end
    
            def update
                author = Author.find(params[:id])
                if author.update_attributes(author_params)
                    render json: {status: 'SUCCESS', message:'Updated author', data:author},status: :ok
                else
                    render json: {status: 'ERROR', message:'author not updated', data:author.errors},status: :unprocessable_entity
                end
            end
        
            private
    
            def author_params
                params.permit(:author_id, :author_name)
            end
        end
    end
end