Rails.application.routes.draw do
  




  resources :users, only: [:create, :show, :index]
  resources :reviews
  resources :properties, only: [:index, :show, :create]

  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "me", to: "users#show"
  get "find_review", to: "reviews#find_review"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
