Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, { format: 'json' } do
     resources :session, only: [:create, :destroy]
  end

  get "/(*all)", to: "front#index"
  root "front#index"
end
