ShopifyApp::Engine.routes.draw do
  controller :sessions do
    get 'login' => :new, :as => :login
    post 'login' => :create, :as => :authenticate
    get 'set_top_level_cookie' => :set_top_level_cookie, :as => :set_top_level_cookie
    get 'auth/shopify/callback' => :callback
    get 'logout' => :destroy, :as => :logout
  end

  namespace :webhooks do
    post ':type' => :receive
  end
end
