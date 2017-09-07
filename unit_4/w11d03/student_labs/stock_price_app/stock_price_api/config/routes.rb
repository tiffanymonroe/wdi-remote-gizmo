Rails.application.routes.draw do
  resources :prices, only: [:index, :show]
  resources :stocks, only: [:index, :show] do
    resources :prices, only: [:create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
