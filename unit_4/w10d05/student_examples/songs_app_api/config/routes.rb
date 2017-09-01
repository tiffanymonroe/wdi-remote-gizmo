Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # method that takes a symbol as an argument
  #creates a dispatcher to get routes
  resources :songs

end
