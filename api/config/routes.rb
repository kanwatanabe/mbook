Rails.application.routes.draw do

  # devise_for :users

  namespace :v1 do
    # mount_devise_token_auth_for 'User', at: 'auth'
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  end
  
  get 'facility/index', format: 'json'
  get 'facility/index/:id' => 'facility#index2', format: 'json'

   get 'facility/test' => 'facility#test', format: 'json'

  post 'facility/create', format: 'json'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
