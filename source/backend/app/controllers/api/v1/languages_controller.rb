module Api
    module V1
        class LanguagesController < ApplicationController
            def index
                languages = Language.all
                render json: {status: 'SUCCESS', message:'Loaded languages', data:languages},status: :ok
            end

            def show
                language = Language.find(params[:id])
                render json: {status: 'SUCCESS', message:'Loaded language', data:language},status: :ok
            end
        
            def create
                language = Language.new(language_params)
        
                if language.save
                    render json: {status: 'SUCCESS', message:'Saved language', data:language},status: :ok
                else
                    render json: {status: 'ERROR', message:'language not saved', data:language.errors},status: :unprocessable_entity
                end
            end
        
            def destroy
                language = Language.find(params[:id])
                language.destroy
                render json: {status: 'SUCCESS', message:'Deleted language', data:language},status: :ok
            end
    
            def update
                language = Language.find(params[:id])
                if language.update_attributes(language_params)
                    render json: {status: 'SUCCESS', message:'Updated language', data:language},status: :ok
                else
                    render json: {status: 'ERROR', message:'language not updated', data:language.errors},status: :unprocessable_entity
                end
            end
        
            private
    
            def language_params
                params.permit(:language_id, :language_name)
            end
        end
    end
end