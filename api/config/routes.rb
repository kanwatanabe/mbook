Rails.application.routes.draw do
  get 'facility/index', format: 'json'
  get 'facility/index/:id' => 'facility#index2', format: 'json'

  post 'facility/create', format: 'json'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
