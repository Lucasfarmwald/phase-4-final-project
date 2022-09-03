Rails.application.routes.draw do
  


  resources :users, only:[:create, :show]
  resources :reviews
  resources :properties, only: [:index]

  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "me", to: "users#show"

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
