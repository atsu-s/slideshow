Rails.application.routes.draw do
  get 'slides/index'
  root "slides#index"
  devise_for :users

  resources :slides do
    resources :images
    resources :shares
    resources :comments
  end
end
