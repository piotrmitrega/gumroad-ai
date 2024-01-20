Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "homepage#index"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  namespace :api do
    get 'products', to: 'gumroad#products'
    get 'sales', to: 'gumroad#sales'
    get 'me', to: 'users#me'

    namespace :ai do
      get 'product/new', to: 'ai_assistant#new_productt'
      get 'product/:productId/suggestion', to: 'ai_assistant#product_suggestion'
      get 'product/:productId/rewrite', to: 'ai_assistant#product_rewrite'
    end
  end

  delete '/logout', to: 'api/sessions#destroy', as: 'logout'

  get '/auth/:provider/callback', to: 'api/sessions#create'

  # Redirect all other routes back to React SPA
  get '*path', to: "homepage#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
