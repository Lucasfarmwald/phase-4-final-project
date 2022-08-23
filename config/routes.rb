Rails.application.routes.draw do
  
  resources :users, only: [:create, :destroy]
  resources :blogs, only: [:create, :index, :destroy]   
  resources :comments, only: [:create, :index, :destroy]

  
  post "login", to: "sessions#login"
  delete "logout", to: "sessions#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
