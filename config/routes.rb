Rails.application.routes.draw do
  root 'message#random_message'
  get 'message/random_message'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users

  post '/auth/login', to: 'authentication#login'
  # Defines the root path route ("/")
  # root "articles#index"
end
