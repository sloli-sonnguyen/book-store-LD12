Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      resources :authors
    end
  end

  namespace 'api' do
    namespace 'v1' do
      resources :books
    end
  end

  namespace 'api' do
    namespace 'v1' do
      resources :categories
    end
  end

  namespace 'api' do
    namespace 'v1' do
      resources :customers
    end
  end

  namespace 'api' do
    namespace 'v1' do
      resources :languages
    end
  end
end
