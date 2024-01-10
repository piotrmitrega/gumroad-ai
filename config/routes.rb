Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "homepage#index"

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"


  get 'api/products', to: 'api#products'
  # Add more API endpoints here as needed

  # Redirect all other routes back to front-end React application
  # If we don't do this, refreshing the page will break as Rails will not know
  # how to redirect back to React SPA.
  get '*path', to: "homepage#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
