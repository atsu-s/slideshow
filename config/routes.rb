Rails.application.routes.draw do
  get 'slides/index'
  root "slides#index"
  devise_for :users

  resources :slide
end
