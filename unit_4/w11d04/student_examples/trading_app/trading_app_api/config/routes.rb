Rails.application.routes.draw do
  resources :ledgers
  resources :commodities
  resources :traders
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
