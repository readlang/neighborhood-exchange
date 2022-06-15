Rails.application.routes.draw do
  
  resources :rentals
  resources :tools, except: :show 

  get "/users/:user_id/borrowed", to: "rentals#user_borrowed"
  get "/users/:user_id/lent", to: "rentals#user_lent"

  get "/users/:user_id/tools", to: "tools#user_tools"
  
  get "/users", to: "users#index" 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #these have been added later as part of the review or practice:
  get "/users/biggest_borrower", to: "users#biggest_borrower"

  get "/tools/search/:tool_name", to: "tools#search"

  get "/users/:id/borrowed_tools", to: "users#borrowed_tools" 

  get "/tools/most_popular", to: "tools#most_popular"

  get "/users/search/:name", to: "users#search"

  get "/rentals/search/:search_term", to: "rentals#search"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
