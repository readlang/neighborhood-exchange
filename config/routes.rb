Rails.application.routes.draw do
  
  resources :rentals
  resources :tools

  get "/users/:user_id/borrowed", to: "rentals#user_borrowed"
  get "/users/:user_id/lent", to: "rentals#user_lent"

  get "/users/:user_id/tools", to: "tools#user_tools"

  get "/tools/search/:search_term", to: "tools#search"
  
  get "/users", to: "users#index" #delete before deployment
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
