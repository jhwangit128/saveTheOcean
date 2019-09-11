Rails.application.routes.draw do
  root 'site#index'

  get '/tips', to: 'tips#index'
  get '/tips/:id', to: 'tips#show'
  post '/tips', to: 'tips#create'
  delete '/tips/:id', to: 'tips#delete'
  put '/tips/:id', to: 'tips#update'
end
