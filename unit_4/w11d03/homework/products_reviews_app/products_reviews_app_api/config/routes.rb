Rails.application.routes.draw do

  resources :products, only: [:index, :show] do
    resources :reviews, except: [:show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
