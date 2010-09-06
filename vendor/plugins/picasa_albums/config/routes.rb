ActionController::Routing::Routes.draw do |map|
  map.resources :picasa_albums

  map.namespace(:admin, :path_prefix => 'refinery') do |admin|
    admin.resources :picasa_albums, :collection => {:update_positions => :post}
  end
end
