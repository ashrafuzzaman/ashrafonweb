ActionController::Routing::Routes.draw do |map|
  map.resources :portfolios

  map.namespace(:admin, :path_prefix => 'refinery') do |admin|
    admin.resources :portfolios, :collection => {:update_positions => :post}
  end
end
