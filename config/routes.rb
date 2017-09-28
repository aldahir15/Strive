Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :calendars, only: [:index, :create, :destroy, :show]
    resources :workouts, only: [:index, :create, :update, :destroy, :show] do
      resources :paths, only: [:show, :create, :destroy]
    end
    resources :paths, only: [:index, :create, :update, :destroy]
    resources :events, only: [:index, :create, :update, :show, :destroy]
    resources :quotes, only: [:show]
    resources :user_events, only: [:create, :index]
  end
end
